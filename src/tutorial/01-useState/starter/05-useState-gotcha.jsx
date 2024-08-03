import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(1);

  const updateValue = function(){
    setValue((currentState) => {
      const newState = currentState + 1;

      return newState;
    });
    console.log(value)
  }

  return (
    <>
      <h3>{value}</h3>
      <button onClick={updateValue} className="btn">Add 1</button>
    </>
  )
};

export default UseStateGotcha;
 