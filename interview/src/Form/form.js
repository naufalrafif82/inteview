import React from 'react'
import './form.css'

const form = () => {
  return (
    <div>
        <form className='form'>
            <p className='nama'>Email</p>
            <input className='input' />
            <p className='nama'>Password</p>
            <input className='input'/>
            <p className='nama'>Confirm Password</p>
            <input className='input'/>
            <p/>
            <button className='button'>Signup</button>
        </form>
    </div>
  )
}

export default form
