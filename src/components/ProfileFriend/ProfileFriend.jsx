import React from 'react'
import {Users} from "../../dummyData"
import "./ProfileFriend.css"
export default function ProfileFriend({user}) {
  return (
     <div className= "test22">
            <img src={user.profilePicture} alt="" className='profileUserText' ></img>
     </div>
  )
}
