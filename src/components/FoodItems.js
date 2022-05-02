import React from "react";

function FoodItems(props) {
  const getFormattedPrice = (price) => `${price}`;
  const handleOnChange = (position) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === position ? !item : item
    );
    props.setCheckedState(updatedCheckedState);
    
    localStorage.setItem("itemname", JSON.stringify(updatedCheckedState));

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + props.food[index].price;
        }
        return sum;
      },
      0
    );

    props.setTotal(totalPrice);
  };

  const buttonEvent = (id, position) => {
     console.log(id);
    const newList = props.food.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(newList))
    const updatedCheckedState = props.checkedState.map((item, index) =>{
    if(index !== position){
      return item;
    }
    });


    props.setFood(newList);
    props.setCheckedState(updatedCheckedState);
    localStorage.setItem("itemname", JSON.stringify(updatedCheckedState));
  };

  return (
    
    <div>
      <button
             className="button1"
             onClick={() => props.setButtonPopup(true)}
           >
             Add
          </button>
      {props.food.map((item, index) => {
        return (
          <p key={index}>
            <input
              type="checkbox"
              checked={props.checkedState[index]}
              value={props.foodItem}
              name={props.foodItem}
              onChange={() => handleOnChange(index)}
            />
            {item.foodItem}
            {getFormattedPrice(item.price)}
            <button className="button" onClick={() => buttonEvent(item.id, index)}>
              Delete
            </button>

          </p>
        );
      })}

      <div>{getFormattedPrice(props.total)}</div>
    </div>
  );
}

export default FoodItems;
