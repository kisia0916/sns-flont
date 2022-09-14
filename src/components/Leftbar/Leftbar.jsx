import React from 'react'
import ProfileBar from '../ProfileLeftBar/ProfileBar'
import "./Leftbar.css"
export const Leftbar = ({page}) => {
  const home_light = ()=>{
    return(
      <div className='Leftbar'>
      <div className='LightWrapper'>
        <div className='event'>
          <img src="assets/star.png" alt = "" className='star'/>
          <span className='Mess'>イベント開催中</span>
        </div>
        <div className='proImg'>
          <img src='assets/ad.jpeg' alt="" className='promotionPhoto'/>
        </div>
      </div>
      <div className='torend'>
          <div className='texts1'>
            <span className='baer_title'>トレンド</span>
          </div>
          <div className='texts2'>
          <span className='baer_title'>トレンド</span>
          </div>
          <div className='texts2'>
          <span className='baer_title'>トレンド</span>
          </div>
      </div>
    </div>
    )
  }
  const profile_light = ()=>{
    return(
      <ProfileBar/>
    )
  }
  return (
    <>
      {page ? profile_light(): home_light()}
    </>
  )
}
