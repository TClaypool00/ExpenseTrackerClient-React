import {  Link } from "react-router-dom";
import { showHide } from "../../Helper";
import { userLoggedIn, getUserFirstName } from '../../helpers/Auth';

const Navbar = () => {
    function logout() {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <nav id="navbar">
            <p id="logo">Expense Tracker</p>
                <div id="dropDown">
                { userLoggedIn() ? (
                    <>
                        <p>Hi, {getUserFirstName()}!</p>
                        <Link to="/bills/add">Add a bill</Link>
                        <Link to='/subscriptions/add'>Add a subscription</Link>
                        <Link to='/loans/add'>Add a loan</Link>
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