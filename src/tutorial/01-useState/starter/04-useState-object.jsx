import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Yan',
    age: 22,
    hobby: 'Singing'
  })
  const [name, setName] = useState('Yan');
  const [age, setAge] = useState(22);
  const [hobby, setHobby] = useState('Music');

  const showJohn = () => {
    setPerson({
      ...person,
      name: 'John',
    })
   /*  setName('John');
    setAge(28);
    setHobby('Scream At the Computer'); */
  }
  return (
  <>
    <h2>useState object example</h2>;
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>Enjoys : {person.hobby}</h3>


    <button onClick={showJohn} className="btn">Show John</button>
  </>
)};

export default UseStateObject;
