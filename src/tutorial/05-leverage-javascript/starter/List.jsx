import React from 'react'
import { people } from '../../../data'
import Person from './Person'

const List = () => {
  return (
    <div>
     {/*  {people.map((people) => {
        const { name } = people

        return <h3 key={name}>{name}</h3>
      })} */}

      {people.map((person) => {
        return <Person key={person.name} {...person} />
      })}
    </div>
  )
}

export default List
