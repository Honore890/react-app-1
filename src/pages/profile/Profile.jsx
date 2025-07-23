import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import './profile.css';

export default function Profile(){

    return(
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="../../../assets/posts/3.webp" alt="" className="profileCoverImg" />
                            <img src="../../../assets/person/1.webp" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Lem Lem</h4>
                            <span className="profilInfoDesc">The Lem of all times</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
                
            </div>
            
            
        </>
    )
}