import {  Link } from "react-router-dom";
import { showHide } from "../../Helper";
import { userLoggedIn } from '../../helpers/Auth';

const Navbar = () => {
    return (
        <nav id="navbar">
            <p id="logo">Expense Tracker</p>
                <div id="dropDown">
                { userLoggedIn() ? (
                    <Link to="/bills/add">Add a bill</Link>
                ) : (
                    <Link to="/account/register">Register</Link>
                )}
                <div className="dot"></div>
            </div>

            <i className="fa fa-bars" onClick={() => showHide('dropDown')}></i>
        </nav>
    );
}
export default Navbar;