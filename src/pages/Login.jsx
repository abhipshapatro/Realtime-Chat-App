import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Isha Chats</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password' />
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login