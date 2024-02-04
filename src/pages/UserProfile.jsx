import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import Avatar from '../images/avatar15.jpg'

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  return (
    <section className='profile'>
      <div className="container profileContainer">
        <Link to={'myposts/sdfsdf'} className='btn'>My Posts</Link>
        <div className="profileDetails">
          <div className="avatarWrapper">
            <div className="profileAvatar">
              <img src={avatar} alt="" />
            </div>
            {/* {Form to update avatar} */}
            <form className='avatarForm'>
              <input type="file" name="avatar" id="avatar" accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])}/>
              <label htmlFor="avatar"><FiEdit /></label>
            </form>
            <button className='profileAvatarBtn'><FaCheck /></button>
          </div>
          <h1>Raj Patil</h1>

          <form action="" className="form profileForm">
            <p action="" className="formErrorMessage">
              This is an error message!
            </p>
            <input type="text" placeholder='Email' name='email' value={userData.email} onClick={changeInputHandler} autoFocus/>
            <input type="password" placeholder='password' name="Password" value={userData.password} onChange={changeInputHandler} />
            <button type="submit" className='btn primary'>Login</button>
          </form>
          <small>Don't have an account?
            <Link to="/register"></Link>Sign Up</small>
        </div>
      </div>
    </section>
  )
}

export default UserProfile