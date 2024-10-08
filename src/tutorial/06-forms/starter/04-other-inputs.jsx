import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('')

  const handleShipping = (e) => {
    console.dir(e.target.checked)
    setShipping(e.target.checked)
  }
  const handleFramework = (e) => {
    console.dir(e.target.value)
    setFramework(e.target.value)
  }

  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            value={framework}
            onChange={handleFramework}
            name='framework'
            id='framework'
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
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
export default OtherInputs
