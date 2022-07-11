const Register = () => {
    function hideShowForm() {
        const loginForm = document.getElementById('loginForm');

        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
        } else {
            loginForm.style.display = 'none';
        }
    }

    return (
        <>
            <form method="post" id="registerForm">
                <h2>Reigster</h2>

                <input type="text" id="txtFirstName" placeholder="First name" />
                <input type="text" id="txtLastName" placeholder="Last name" />
                <input type="email" id="email" placeholder="Email address" />
                <input type="text" id="phoneNum" placeholder="Phone number" />
                <input type="password" id="password" placeholder="Password" />
                <input type="password" id="confirmPassword" placeholder="Confirm Password" />

                <button type="submit" className="btn" id="btnRegister">Register</button>
            </form>                        

            <button className="btn" id="signWithEmail" onClick={hideShowForm}>Sign in with email</button>

            <form method="post" id="loginForm">
                <h2>Login</h2>

                <input type="text" id="txtLoginEmail" placeholder="Email address" />
                <input type="password" id="txtLoginPassword" placeholder="Password" />
                <button type="submit" className="btn" id="btnLogin">Login</button>
            </form>

            <button className="btn twitter-blue">Sign in with Google</button>
            <button className="btn facebook-blue">Sign in with Facebook</button>
            <button className="btn google-yellow">Sign in with Twitter</button>
        </>
    );
}

export default Register;