import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import Avatar from '../images/avatar15.jpg'

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  return (
    <section className='profile'>
      <div className="container profileContainer">
        <Link to={'myposts/sdfsdf'} className='btn'>My Posts</Link>
        <div className="profileDetails">
          <div className="avatarWrapper">
            <div className="profileAvatar">
              <img src={Avatar} alt="" />
            </div>
            {/* {Form to update avatar} */}
            <form className='avatarForm'>
              <input type="file" name="avatar" id="avatar" accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])}/>
              <label htmlFor="avatar"><FiEdit /></label>
            </form>
            <button className='profileAvatarBtn'><FaCheck /></button>
          </div>
          <h1>Raj Patil</h1>
        </div>
      </div>
    </section>
  )
}

export default UserProfile