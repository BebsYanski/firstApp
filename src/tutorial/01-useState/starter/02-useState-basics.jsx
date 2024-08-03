import { useState } from "react";


const UseStateBasics = () => {
 
  // console.log(useState());
  // console.log(useState(1));
  // console.log(useState("Hello"));

  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);


  const [count, setCount] = useState(0);
  
  const handleClick = () =>{
    setCount(count + 1);
    // setCount("Pants");
  }
  return (
    <>
     <h2> You clicked {count} times</h2>
     <button onClick={handleClick} className="btn">Click me</button>
    </>
);
};

export default UseStateBasics;
