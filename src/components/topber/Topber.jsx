
import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topber.css"
export default function Topber() {
  return (
    <div className = "topbarContainer">
        <div className="topbarLeft">
            <span className='logo'>Fumi sns</span>
        </div>
        <div className='topberCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input type="text" className='searchInput' placeholder='話題を検索'/>
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarItemIcons'>
                <div className='topbarIconItem1'>
                    <Chat className="Icon"/>
                    <div className='test1'>
                        <span className='Icon1'>1</span>
                    </div>
                </div>
                <div className='topbarIconItem2'>
                    <Notifications className="Icon"/>
                    <div className='test2'>
                        <span className='Icon1'>1</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='userName'>
            <span className='text'>fumi</span>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topImg'/>
    </div>
  )
}
