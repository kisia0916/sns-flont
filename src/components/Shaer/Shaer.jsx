import { GifBox, Image, Send } from '@mui/icons-material'
import React from 'react'
import "./Shaer.css"
export const Shaer = () => {
  return (
    <div className='Shaer'>
        <div className='Shaer_2'>
            <div className='ShaerTop'>
              <img src='/assets/person/1.jpeg' alt="" className='myIcon'/>
              <div className='Shaer_center'>
              <input type="text" placeholder="今何してる？" className="textBox"/>
            </div>
            </div>
            <br/>
            <hr className='line'/>
            <div className='shaerBotom'>
              <div className='option'>
                <div className='Image'>
                  <Image/>
                  <span className='icon1'>画像</span>
                </div>
                <div className='Image2'>
                  <GifBox/>
                  <span className='icon'>gif</span>
                </div>
              </div>
              <button className='sendButton'>投稿</button>
            </div>
      </div>
      </div>
  )
}
