import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Message = ({message}) => {

  console.log(message);

  const {currentUser} = useContext(AuthContext)


  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div> */}
    </div>
  )
}

export default Message