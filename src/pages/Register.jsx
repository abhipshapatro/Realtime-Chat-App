import React, { useState } from 'react'
import AddAvatar from '../images/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase'
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';




const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)
      //Create a unique image name
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true)
    }

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
          {err && <span>Something went wrong!</span>}
        </form>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </div>
    </div>
  )
}

export default Register