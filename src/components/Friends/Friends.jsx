import React from 'react'

export default function Friends({userData}) {
  return (
    <li className='FriendListImg'>
        <img src={userData.profilePicture} alt='' className="userImg"/>
        <span className="FriendName">{userData.username}</span>
    </li>
  )
}
