import { useState } from 'react'

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser({ ...newUser })
    // console.log(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(user)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            value={user.name}
            name='name'
            onChange={handleChange}
            type='text'
            className='form-input'
            id='name'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            value={user.email}
            name='email'
            onChange={handleChange}
            type='email'
            className='form-input'
            id='email'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            value={user.password}
            name='password'
            onChange={handleChange}
            type='password'
            className='form-input'
            id='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default MultipleInputs
