import React from 'react'
import AddAvatar from '../images/addAvatar.png'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'


const Register = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Isha Chats</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />
          <input type="file" id='file' style={{ display: "none" }} />
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