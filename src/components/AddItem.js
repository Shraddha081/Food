import React from 'react'

function Form1(props) {


  const onSubmit =(e) =>{
    e.preventDefault();

    const iname = e.target.iname.value;
    const pname = e.target.pname.value;
    
    props.setFood(
      prevState=>{
    let temp =[...prevState, {id:new Date().getTime().toString() , foodItem: iname, price: Number(pname)}];
    localStorage.setItem("items",JSON.stringify(temp))
    return temp;
      }
    )
    
    props.setCheckedState(
      (prevState) => {
        let temp = [...prevState, false]
    localStorage.setItem("itemname", JSON.stringify(temp) )
    return temp;
    })
  }

  
  return (
     <div>
       
       <form onSubmit ={onSubmit}>
         <div>
           
            <p> Add Items: </p>
           <label className='label'> Item Name: </label><br/>
            <input type='text' name = "iname" className='input'/><br/>

            <label className='label'> Price: </label><br/>
            <input type='number' name = "pname" className='input'/><br/>
            
            </div>

         <button className='button'> save </button>
       </form>
     </div>
   )
 };
 

export default Form1;