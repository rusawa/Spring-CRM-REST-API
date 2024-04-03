import '../index.css'
import { Link } from "react-router-dom";

function Navigation(){

    return(
        <div className='navigation'>
            <Link className="logo" to="/"><h1>CRM</h1></Link>
            <div>
                <Link className="nav-add-button" to="/add">Add</Link>
            </div>
        </div>        
    );
}

export default Navigation