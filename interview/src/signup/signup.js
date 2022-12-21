import React from 'react'
import './signup.css' 

const signup = () => {
  return (
    <div className='signup'>
        <form>
            <p className='akun'> Already have an acoount? <a className='login' href='#'> Login </a> </p>
            <h1>Sign Up</h1>
            <p className='id'>Use Your OpenID To Sign UP</p>
        </form>
    </div>
  )
}

export default signup
