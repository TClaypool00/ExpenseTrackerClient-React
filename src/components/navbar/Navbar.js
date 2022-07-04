import {  Link } from "react-router-dom";
const Navbar= () =>{
    return (
        <nav id="navbar">
            <li>
                <Link to="/account/login">Login</Link>
            </li>
            <li>
                <Link to="/account/register">Register</Link>
            </li>
            <li>
                <div className="dot"></div>
            </li>
        </nav>
    );
}
export default Navbar;