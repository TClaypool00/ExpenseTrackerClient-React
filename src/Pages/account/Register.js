const Register = () => {
    return (
        <>
            <h2>Reigster</h2>

            <form method="post">
                <input type="text" id="txtFirstName" placeholder="First name" />
                <input type="text" id="txtLastName" placeholder="Last name" />
                <input type="email" id="email" placeholder="Email address" />
                <input type="text" id="phoneNum" placeholder="Phone number" />
                <input type="password" id="password" placeholder="Password" />
                <input type="password" id="confirmPassword" placeholder="Confirm Password" />

                <button type="submit" className="btn" id="btnRegister">Register</button>
            </form>
        </>
    );
}

export default Register;