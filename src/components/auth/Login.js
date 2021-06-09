import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState({
        // initialy doesn't show
        email: '',
        password: ''
    })

    const onChangeHandler = e => {
        setState({ [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        const { email, password } = state;

        // Create user object
        const user = {
            email,
            password
        };

        // Attempt to login
        // props.login(user);
        console.log(user);
    }

    return (
        <div className="container">
            <div className="mt-5 w-50 mx-auto">
                <h1 className="text-center">Login</h1>

                <form onSubmit={onSubmitHandler}>

                    <div className="form-group">

                        <label htmlFor="email" className="font-weight-bold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <label htmlFor="password" className="font-weight-bold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <button className="btn btn-warning btn-block" style={{ marginTop: '2rem' }}>Login</button>

                    </div>

                </form>

                <a href="forgot-password" className="forgot-password">
                    <p className="font-weight-bold p-2">Forgot password</p>
                </a>
                <div className="d-flex">
                    <p className="p-2">No account yet? &nbsp;<a href="/register" className="text-success font-weight-bold">Register</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login
