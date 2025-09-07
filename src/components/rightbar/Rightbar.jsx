import OnlineFriend from '../onlineFriend/OnlineFriend'
import './rightbar.css';
import { Users } from '../../dummyData';
import FollowingFriend from '../followingFriend/FollowingFriend';

function Rightbar({profile}){

    const followingList = Users.slice(0,5);
    const HomeRightbar = ()=>{
        return(
            <>
                <div className="birthdayContainer">
                    <img src="../../../assets/gift.webp" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Momo</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="../../../assets/ad.webp" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <OnlineFriend key={u.id} user={u} />
                    ))}
            
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Dakar</span>
                    </div>
                     <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Dakar</span>
                    </div>
                     <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Profession:</span>
                        <span className="rightbarInfoValue">Professor</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>Following friends</h4>
                <div className="rightbarFollowings">
                    {followingList.map(u=>(
                        <FollowingFriend key={u.id} user={u} />
                    ))}
                </div>
                <button className="profileRightbarButton">Show More</button>
                
            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile?<ProfileRightbar />:<HomeRightbar />}
                
            </div>
        </div>
    )
}

export default Rightbar;