import {  Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <nav id="navbar">
            <a id="logo">Expense Tracker</a>
            <Link to="/account/register">Register</Link>
            <div className="dot"></div>
        </nav>

        
    );
}
export default Navbar;