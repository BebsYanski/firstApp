import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  console.log(people)

  function clearList(list) {
    list = []
  }
  function removeItem(id) {
    let newPeople = people.filter((person) => person.id !== id)

    setPeople(newPeople)
  }
  
  function clearAllItems() {
    setPeople([]);
  }
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)} type='button'>
              remove
            </button>
          </div>
        )
      })}

      <button onClick={clearAllItems} className='btn'>
        Clear Items
      </button>
    </>
  )
}

export default UseStateArray
