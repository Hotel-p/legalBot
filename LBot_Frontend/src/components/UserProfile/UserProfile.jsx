import { Link, Outlet } from "react-router-dom";
import "../../styles/UserProfile/UserProfile.css"

const UserProfile = ()=>{

    const sideBarItems = [
        {
            "image":"",
            "text":"Chat",
            "path":"Chat"
        },
        {
            "image":"",
            "text":"Inbox",
            "path":"Inbox"
        },
        {
            "image":"",
            "text":"Saved",
            "path":"Saved"
        },
        {
            "image":"",
            "text":"Help",
            "path":"Help"
        }
    ]

    return(
        <div className="Profile">
            <div className="sidebar">
                <div className="logo"></div>
                {
                    sideBarItems.map((item)=>{
                        return(
                            <>
                                <Link to={item.path}>
                                    {item.text}
                                </Link>
                            </>
                        )
                        
                    })
                }
            </div>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default UserProfile;