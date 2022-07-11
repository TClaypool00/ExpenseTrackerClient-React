import {  Link } from "react-router-dom";
import { showHide } from "../../Helper";

const Navbar = () =>{

    return (
        <nav id="navbar">
            <a id="logo" href="#">Expense Tracker</a>
                <div id="dropDown">
                <Link to="/account/register">Register</Link>
                <div className="dot"></div>
            </div>

            <i className="fa fa-bars" onClick={() => showHide('dropDown')}></i>
        </nav>
    );
}
export default Navbar;