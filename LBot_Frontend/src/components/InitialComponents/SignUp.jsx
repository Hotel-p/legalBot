import { Link } from "react-router-dom";

import "../../styles/InitialComponents/SignUp.css"

const SignUp = ()=>{

    return(
        <div className="SignUp">
            <div className="title">Sign Up</div>
            
            <form>
                <label htmlFor="">Full Name</label>
                <input type="text" />
                <label htmlFor="">Email Address</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
                <Link to="/profile"><button className="Continue">Continue</button></Link>
            </form>

            <hr></hr>

            <div className="or">
                <button>Continue with Google</button>
                <button>Sign  In With Apple</button>
            </div>
            
            <Link to="/"><strong>Go Back?</strong></Link>
        </div>
    )
}

export default SignUp;