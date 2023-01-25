import React from 'react'
import AddAvatar from '../images/addAvatar.png'
import Attach from '../images/attach.png';
import Send from '../images/send.png';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <input type="file" id='file' style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <img src={AddAvatar} alt="" />
        <img src={Send} alt="" />

      </div>
    </div>
  )
}

export default Input