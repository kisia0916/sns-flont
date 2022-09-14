import React from 'react'
import RightBar from '../RightBar/RightBar'
import { Shaer } from '../Shaer/Shaer'
import Tweet from '../Tweet/Tweet'
import {Posts} from "../../dummyData" 
import "./TimeLine.css"
export default function TimeLine() {
  return (
    <div className='Timeline'>
        <div className="timelinewapper">
            <Shaer/>
              {Posts.map((post)=>(
                <Tweet post={post} key={post.id} page2 ={"profile"} />
            ))}
        </div>
    </div>

  )
}
