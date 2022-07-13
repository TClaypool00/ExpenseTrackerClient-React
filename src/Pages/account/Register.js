import { useState } from "react";
import { showHide } from "../../Helper";
import { RegisterModel } from "../../models/RegisterModel";
import { create } from '../../API';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function registerUser() {
        let register = new RegisterModel(firstName, lastName, email, phoneNum, password, confirmPassword, false);
        create('users', register)
            .then(response => {
                console.log(response);
            })
    }

    return (
        <>
            <form method="post" id="registerForm" onSubmit={registerUser}>
                <h2>Reigster</h2>

                <input type="text" id="txtFirstName" onChange={e => setFirstName(e.target.value)} placeholder="First name" />
                <input type="text" id="txtLastName" onChange={e => setLastName(e.target.value)} placeholder="Last name" />
                <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                <input type="tel" id="phoneNum" onChange={e => setPhoneNum(e.target.value)} placeholder="Phone number" />
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <input type="password" id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />

                <button type="submit" className="btn" id="btnRegister">Register</button>
            </form>                        

            <button className="btn" id="signWithEmail" onClick={() => showHide('loginForm')} >Sign in with email</button>

            <form method="post" id="loginForm">
                <h2>Login</h2>

                <input type="text" id="txtLoginEmail" placeholder="Email address" />
                <input type="password" id="txtLoginPassword" placeholder="Password" />
                <button type="submit" className="btn" id="btnLogin">Login</button>
            </form>

            <button className="btn google-yellow">Sign in with Google</button>
            <button className="btn facebook-blue">Sign in with Facebook</button>
            <button className="btn twitter-blue">Sign in with Twitter</button>
        </>
    );
}

export default Register;