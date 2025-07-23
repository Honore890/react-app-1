import './post.css';
import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({post}){

    const [like,setLike] = useState(post.like?post.like:0);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className='postProfilImg' />
                        <span className="postUsername">
                            {Users.filter(u=>u.id===post.userId)[0].username}
                        </span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {post.desc&&<span className="postText">{post.desc}</span>}
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className='likeIcon' htmlColor='Red' onClick={()=>likeHandler()} />
                        <ThumbUp className='likeIcon' htmlColor='Goldenrod' onClick={()=>likeHandler()} />
                        <span className="postLikeCounter">{like} peoples like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment?post.comment:0} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;