import "../../styles/InitialComponents/DefaultProfile.css"


import { Link } from 'react-router-dom';

const DefaultProfile = ()=>{

    return(
        <>
            <div className="greetings">
                <div className="upper">
                    <div className="text">Welcome To</div>
                    <div className='title'>Law-Seek-O</div>
                    <div className="text">Your Friendly Law Chatbot</div>
                </div>
                
                <div className="buttons">
                    <Link to="Login">
                        <button className='Log'>Login</button>  
                    </Link>
                    <Link to="SignUp">
                        <button className='Log'>Sign Up</button> 
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default DefaultProfile;