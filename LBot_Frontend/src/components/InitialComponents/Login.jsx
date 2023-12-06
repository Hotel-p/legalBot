import { Link } from "react-router-dom";

import "../../styles/InitialComponents/Login.css"

const Login = ()=>{

    return(
        <div className="Login">
            <div className="title">Log In</div>
            
            <form>
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

export default Login;