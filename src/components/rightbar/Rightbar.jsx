import OnlineFriend from '../onlineFriend/OnlineFriend'
import './rightbar.css';
import { Users } from '../../dummyData';

function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}

export default Rightbar;