import { useState, useEffect } from "react";
import { showHide } from "../../Helper";
import { RegisterModel } from "../../models/RegisterModel";
import { registerApi, loginApi } from '../../API';
import { Login } from "../../models/Login";
import { title } from '../../helpers/helpers'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const error = document.getElementById('error');
    const success = document.getElementById('success');
    const loginForm = document.getElementById('loginForm');
    const loginPasswordInput = document.getElementById('txtLoginPassword');

    useEffect(() => {
        document.title = title + 'Register/Login'
    })

    function registerUser(e) {
        e.preventDefault();
        let registerModel = new RegisterModel(firstName, lastName, email, phoneNum, password, confirmPassword, false);
        registerApi(registerModel)
            .then(response => {
                if (error.innerHTML !== '') {
                    error.innerHTML = '';
                }

                success.innerHTML = response.data.message;
                e.target.reset();
                
                if (loginForm.style.display === 'none') {
                    loginForm.style.display = 'block';
                }
                setLoginEmail(email);

                let emailINput = loginForm.getElementsByTagName('input')[0];
                emailINput.value = email;

                loginPasswordInput.focus();
            }).catch(err => {                
                if (success.innerHTML !== '') {
                    success.innerHTML = '';
                }

                error.innerHTML = err.response.data.message;

                
            }) 
    }

    function login(e) {
        e.preventDefault();
        let loginModel = new Login(loginEmail, loginPassword);
        loginApi(loginModel)
            .then(resp => {
                if (error.innerHTML !== '' ) {
                    error.innerHTML = '';
                }
                localStorage.setItem('user', JSON.stringify(resp.data.user));
                window.location.reload();
            }).catch(err => {
                error.innerHTML = err.response.data.message;
                loginForm.getElementsByTagName('input')[1].value = '';
                loginForm.getElementsByTagName('input')[1].focus();
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

            <form method="post" id="loginForm" onSubmit={login} style={{ display: "none" }}>
                <h2>Login</h2>

                <input type="text" id="txtLoginEmail" onChange={e => setLoginEmail(e.target.value)} placeholder="Email address" />
                <input type="password" id="txtLoginPassword" onChange={e => setLoginPassword(e.target.value)} placeholder="Password" />
                <button type="submit" className="btn" id="btnLogin">Login</button>
            </form>

            <button className="btn google-yellow">Sign in with Google</button>
            <button className="btn facebook-blue">Sign in with Facebook</button>
            <button className="btn twitter-blue">Sign in with Twitter</button>
        </>
    );
}

export default Register;