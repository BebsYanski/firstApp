import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false);

  const familyRecord = {
    name: 'Yannick',
    age: '90',
    gender: 'male',
    children: {
      amount: 5,
      names: ['Vivaldi', 'Jason', 'Melissa', 'Harrison', 'Elizabeth'],
    },
    Occupation: 'Engineer',
  }

  const intID = setInterval(()=>{
    console.table(familyRecord);
  }, 3000);

  
  setTimeout(() => {
    clearInterval(intID);
    console.error("cleared");
    console.log(familyRecord);
    
  }, 6000);

  return (
  <div>
    {toggle && <SecondComponent/>}
    <button onClick={()=>{setToggle(!toggle)}} className="btn">{toggle ? "untoggle" : "toggle"}</button>
  </div>
);
};

const SecondComponent = ()=> {

  /* useEffect(() => {
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    return () => {
      clearInterval(intID);
      console.log("cleanup");
    }
  }, []); */

  useEffect(()=> {
    const someFunc = () => {
      // ?some Logic
    }
    window.addEventListener("scroll", someFunc);

    return () => {
      removeEventListener("scroll", someFunc);
    }
  }, [])


  useEffect(() => {
    console.log("Hello World");
  }, [])

  return <h2>second Component</h2>
}

export default CleanupFunction;
