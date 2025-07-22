import './post.css';
import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';
import { Users } from '../../dummyData';

function Post({post}){
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
                        <Favorite className='likeIcon' htmlColor='Red' />
                        <ThumbUp className='likeIcon' htmlColor='Goldenrod' />
                        <span className="postLikeCounter">{post.like?post.like:0} peoples like it</span>
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