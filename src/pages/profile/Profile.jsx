
import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Shaer } from '../../components/Shaer/Shaer'
import Topber from '../../components/topber/Topber'
import { Leftbar } from '../../components/Leftbar/Leftbar'
import "./Profile.css"
import TimeLine from '../../components/TimeLine/TimeLine'
export default function Profile() {
  return (
    <div>
        <Topber/>
        
        <div className='progileWappar'>
            <div className='profileLeft'>
                <Sidebar className="homeSide"/>
            </div>
            <div className='profileCenter'>
                <div className='profileTimeLineWapp'>
                    <TimeLine page2={"profile"}/>
                </div>
                <Leftbar page={"profile"} className="friendIcons3"/>
                
            </div>
        </div>
        </div>
  )
}
