import "../../styles/InitialComponents/Greetings.css"

import { Outlet } from 'react-router-dom';

const Greetings = ()=>{

    return(
        <div className="main">
            <div className="left">
                asad
            </div>

            <div className="right">
                <Outlet />
            </div>
        </div>
    )
    
    
}

export default Greetings;