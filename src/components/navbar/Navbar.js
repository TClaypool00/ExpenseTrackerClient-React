import {  Link, useNavigate } from "react-router-dom";
import { showHide } from "../../Helper";
import { userLoggedIn, getUserFirstName } from '../../helpers/Auth';

const Navbar = () => {
    const nav = useNavigate();

    function logout() {
        localStorage.removeItem('user');
        nav('/account/register');
    }

    return (
        <nav id="navbar">
            <p id="logo">Expense Tracker</p>
                <div id="dropDown">
                { userLoggedIn() ? (
                    <>
                        <p>Hi, {getUserFirstName()}!</p>
                        <Link to="/bills/add">Add a bill</Link>
                        <p onClick={logout}>Log out</p>                        
                    </>
                    
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