import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Tweet.css"
import {Users} from "../../dummyData";
export default function Tweet({post ,page2}) {
    const [isLike,setisLike] = useState(false)
    let userId=0;
    for(let i = 0;Users.length>i;i++){
        if (Users[i].id === post.id){
            console.log(Users[i].id)
            userId = Users[i];
        }
    }
    const [likes,setlike] = useState(post.like)
    const pushLike = ()=>{
            if (isLike){
                setlike(likes-1)
                setisLike(!isLike)
            }else{
                setlike(likes+1)
                setisLike(!isLike)
            }
    }
    const profileTweet = ()=>{
        return(
            <div className='Post2'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='top1'>
                        <img src={userId.profilePicture} alt="" className='postProfileImg'/>
                        <span className='postUserName'>{userId.username}</span>
                    </div>
                    <div className='top2'>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='top3'>
                        <MoreVert className="moreVert"/>
                    </div>
                </div>
                <div className='postRight'>

                </div>
                <span className='postText'>{post.desc}</span>
                <div className='postCenter'>        
                        <img src={post.photo} alt='' className='postImg'/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                            <div className='test3'>
                                <img src='./assets/heart.png' alt='' className='likeIcon'  onClick={()=>pushLike()}/>
                                <span className='postLikeCounter'>{likes}人がaいねしました</span>
                            </div>
                            <div className='commentCount'>
                                <span className='postCommentText'>{post.comment}件のコメント</span>
                            </div>

                    </div> 
                </div>

            </div>
        </div>
        )
    }
    const homeTweet = ()=>{
        return(
            <div className='Post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='top1'>
                        <img src={userId.profilePicture} alt="" className='postProfileImg'/>
                        <span className='postUserName'>{userId.username}</span>
                    </div>
                    <div className='top2'>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='top3'>
                        <MoreVert className="moreVert"/>
                    </div>
                </div>
                <div className='postRight'>

                </div>
                <span className='postText'>{post.desc}</span>
                <div className='postCenter'>        
                        <img src={post.photo} alt='' className='postImg'/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                            <div className='test3'>
                                <img src='./assets/heart.png' alt='' className='likeIcon'  onClick={()=>pushLike()}/>
                                <span className='postLikeCounter'>{likes}人がいいねしました</span>
                            </div>
                            <div className='commentCount'>
                                <span className='postCommentText'>{post.comment}件のコメント</span>
                            </div>

                    </div> 
                </div>

            </div>
        </div>
        )
    }
    return (
        <>
            {page2 ? profileTweet(): homeTweet()}
        </>
  )
}
