import { Light } from '@mui/icons-material'
import React from 'react'
import { Leftbar } from '../../components/Leftbar/Leftbar'
import RightBar from '../../components/RightBar/RightBar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/TimeLine/TimeLine'
import Topber from '../../components/topber/Topber'
import "./Home.css"
export default function Home() {
  return (
    <div className='test'>
        <Topber/> 
        <div className='app1'>
          <Sidebar className="sidebar"/>
          <TimeLine/>
          <Leftbar/>
        </div>
    </div>
  )
}
