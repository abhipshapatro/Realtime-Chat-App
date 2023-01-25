import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Isha Chat</span>
        <div className='user'>
            <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>Isha</span>
            <button>Logout</button>
        </div>
        
    </div>
  )
}

export default Navbar