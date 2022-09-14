import React, { useState } from 'react'
import {Bookmark, Home, Message, Notifications, Person, Search, Settings} from "@mui/icons-material"
import "./Sidebar.css"
import Friends from '../Friends/Friends'
import {Users} from "../../dummyData"
export const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='List'>
                <li className='ListItem1'>
                    <Home className='ListIcon'/>
                    <span className= "ListText">ホーム</span>
                </li>
                <li className='ListItem'>
                    <Search className='ListIcon'/>
                    <span className= "ListText">検索</span>
                </li>
                <li className='ListItem'>
                    <Message className='ListIcon'/>
                    <span className= "ListText">メッセージ</span>
                </li>
                <li className='ListItem'>
                    <Notifications className='ListIcon'/>
                    <span className= "ListText">通知</span>
                </li>
                <li className='ListItem'>
                    <Bookmark className='ListIcon'/>
                    <span className= "ListText">ブックマーク</span>
                </li>
                <li className='ListItem'>
                    <Person className='ListIcon'/>
                    <span className= "ListText">プロフィール</span>
                </li>
                <li className='ListItem'>
                    <Settings className='ListIcon'/>
                    <span className= "ListText">設定</span>
                </li>
            </ul>
            <hr className='centerLine'/>
            <div className="FriendList">
                    <span className='title_text'>Following- </span>
                    <span className='num'>{Users.length}</span>
                    <ul className='FriendListHost'>
                        {Users.map((user)=>(
                            <Friends userData={user} key={user.id}/>
                        ))}
                    </ul>
            </div>
        </div>
    </div>
  )
}
