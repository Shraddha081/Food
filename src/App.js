import React, {useState, useEffect} from 'react';
import FoodItems from './components/FoodItems';
import AddItem from './components/AddItem';
import PopUp from './components/PopUp';

const Menu_Items = [
  { id: 1, foodItem: "MoMO", price: 300 },
  { id: 2, foodItem: "Pizza", price: 500 },
  { id: 3, foodItem: "Chowmein", price: 200 },
  { id: 4, foodItem: "rice", price: 400 },
  { id: 5, foodItem: "Sushi", price: 600 },
];

function App() {
  const [food, setFood] = useState([])
  const [total, setTotal] =useState(0);
  const [checkedState, setCheckedState] = useState([]);
  const [buttonPopup, setButtonPopup] = useState (false);

    useEffect(() => {
    if (!localStorage.getItem("items")) {
      localStorage.setItem("items", JSON.stringify(Menu_Items));

      setFood(Menu_Items);
    } else {
      let MenuItems = JSON.parse(localStorage.getItem("items"));

      setFood(MenuItems);
    }
  }, []);

  useEffect(()=>{
    if(!localStorage.getItem("itemname")){
      let arr= new Array(food.length).fill(false)
      localStorage.setItem("itemname", JSON.stringify(arr))
      setCheckedState(arr)
    }
    else{
      let Menuitems = JSON.parse(localStorage.getItem("itemname"));
      setCheckedState(Menuitems);
    }
    // setCheckedState(JSON.parse(localStorage.getItem("itemname"))|| new Array(food.length).fill(false))
  },[food])
  
  return (
    <>
    <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
    <AddItem food= {food} setFood ={setFood} setCheckedState={setCheckedState} checkedState ={checkedState} /><br/>
    </PopUp>

     <FoodItems food ={food} setFood={setFood} checkedState={checkedState} setCheckedState={setCheckedState} total ={total} setTotal={setTotal}  buttonPopup ={buttonPopup} setButtonPopup ={setButtonPopup}/> 
            
      </>

  );
}

export default App;
