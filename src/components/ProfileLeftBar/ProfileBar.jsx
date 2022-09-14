import React from 'react'
import "./ProfileBar.css"
import {Users} from "../../dummyData"
import ProfileFriend from '../ProfileFriend/ProfileFriend'
export default function ProfileBar() {
  return (
    <>
        <div className='profileLeft2'>
            <span className='profiletext2'>ユーザー情報</span>
            <span className='profiletext3'>出身地</span>
            <span className='profiletext4'>東京都大田区</span>
            <span className='profiletext3'>フレンド</span>
            <div className='test21'>
              {Users.map((user)=>(
                <ProfileFriend user={user} className= "test25"/>
              ))}
            </div>
        </div>
    </>
  )
}
