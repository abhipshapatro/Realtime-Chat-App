import React from 'react'
import AddAvatar from '../images/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Isha Chats</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='Enter name' />
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password' />
                <input type="file" id='file' style={{display: "none"}} />
                <label htmlFor="file">
                    <img src={AddAvatar} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register