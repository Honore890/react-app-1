import './followingFriend.css'

export default function FollowingFriend({user}){

    return(
        <div className="rightbarFollowing">
            <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">{user.username}</span>
        </div>
    )
}