import React, { useReducer } from 'react'
import { data } from '../../../data'
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'
import reducer from './reducer'

const defaultState = {
  people: data,
  isLoading: false,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }
  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={state.people.length > 0 ? clearList : resetList}
      >
        {state.people.length <= 0 ? 'reset' : 'clear items'}
      </button>
    </div>
  )
}

export default ReducerBasics
