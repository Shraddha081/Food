import React, {useEffect} from 'react'

function Form1(props) {


  const onSubmit =(e) =>{
    e.preventDefault();

    const iname = e.target.iname.value;
    const pname = e.target.pname.value;
    if(!iname){
      props.setError("can not be empty");
    }
    else{
    props.setFood([...props.food, {id:new Date().getTime().toString() , foodItem: iname, price: Number(pname)}])
    props.setCheckedState((prevState) => [...prevState, false])
    // props.setFood([...props.food, {price: pname}])
        console.log(pname);
  }
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