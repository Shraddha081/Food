import React from 'react';

import {useState} from 'react'
import FoodItems from './components/FoodItems';
import AddItem from './components/AddItem';

function App() {
  const [food, setFood] = useState([{id:1 , foodItem: 'MoMO', price: 300}, {id: 2, foodItem: 'Pizza', price: 500}, {id: 3, foodItem: 'Chowmein', price: 200}, {id: 4, foodItem: 'rice', price:400},{id: 5, foodItem:'Sushi', price: 600}])
  const [total, setTotal] =useState(0);
  const [checkedState, setCheckedState] = useState(JSON.parse(localStorage.getItem("itemname"))|| new Array(food.length).fill(false) 
  );
  
  return (
    <>
     <FoodItems food ={food} setFood={setFood} checkedState={checkedState} setCheckedState={setCheckedState} total ={total} setTotal={setTotal}/> 
            <AddItem food= {food} setFood ={setFood} setCheckedState={setCheckedState}/><br/>

      </>

  );
}

export default App;
