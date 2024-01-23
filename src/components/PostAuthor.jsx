import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

function PostAuthor() {
  return (
    <Link to={`/posts/users/sdfsdf`} className='postAuthor'>
        <div className="postAuthorAvatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="postAuthorDetails">
            <h5>By: Raj Patil</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor