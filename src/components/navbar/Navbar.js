import {  Link } from "react-router-dom";
const Navbar= () =>{
    return (
        <nav id="navbar">
            <Link to="/account/login">Login</Link>
            <Link to="/account/register">Register</Link>
            <div className="dot"></div>
        </nav>
    );
}
export default Navbar;