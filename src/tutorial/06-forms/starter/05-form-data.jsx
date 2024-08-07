import { useState } from 'react'
const Genders = ['Male', 'Female', 'Other']

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    console.log(e.target)
    const formData = new FormData(e.currentTarget)
    console.log(formData)

    const name = formData.get('name')
    const email = formData.get('email')

    // console.log([...formData.entries()])
    const newUser = Object.fromEntries(formData)
    console.log(newUser)
    setValue(value + 1)
    e.currentTarget.reset()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <div className='form-row'>
          <label htmlFor='gender'>Gender</label>
          <select name='gender' id='gender'>
            {Genders.map((gender) => {
              return <option key={gender}>{gender}</option>
            })}
          </select>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default UncontrolledInputs
