import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'
import Signout from "../images/signout.png"
 

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <span className='logo'>Isha Chat</span>
        <div className='user'>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.name}</span>
            <button onClick={() => signOut(auth)}> <img src={Signout} alt="" /> </button>
        </div>
        
    </div>
  )
}

export default Navbar