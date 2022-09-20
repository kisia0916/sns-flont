import React from 'react'
import "./LoginCenter.css"
export default function LoginCenter() {
  return (
      <div className='login_wapp'>
        <div className = "login_left">
            <div className = "loLText">

                      <span className='loginLeftText'>Fumi</span>
                      <span className='loginLeftText2'>SNS</span>
          </div>
          </div>
        <div className='login_right'>
          <div className='loRText'>
            <span className='loginRightText'>Login</span>
            <span className='loginMail'>Mail</span>
            <input type = "text" className = "loginMailBox"/>
            <span className='loginPass'>PassWord</span>
            <input type  = "text" className = "loginPassBox"/>
            <span className='loginButton'>login</span>
            <span className='loginButton2'>Create account</span>
            <div className='rightEn'>
              
            </div>
            {/* <s pan className='loginPass'>PassWord</span> */}
        </div>
     </div>
    </div>

  )
  }