import { useState } from "react"

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

 

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(name + " "+email);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Controlled Inputs</h2>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          onChange={(e)=>{
            setName(e.target.value)
          }}
          placeholder='add name'
          value={name}
          className='form-input'
          id='name'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          placeholder='add email'
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          value={email}
          className='form-input'
          id='email'
        />
      </div>

      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
