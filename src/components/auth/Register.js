import React, { useState } from 'react'

const Register = () => {

    const [state, setState] = useState({
        // initialy doesn't show
        name: '',
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
            name: '',
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
                <h1 className="text-center">Register</h1>

                <form onSubmit={onSubmitHandler}>

                    <div className="form-group">

                        <label htmlFor="name" className="font-weight-bold">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <label htmlFor="email" className="font-weight-bold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <label htmlFor="password" className="font-weight-bold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <button className="btn btn-warning btn-block" style={{ marginTop: '2rem' }}>Register</button>

                    </div>

                </form>

                <div className="d-flex">
                    <p className="p-2">Having account? &nbsp;<a href="/login" className="text-success font-weight-bold">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register
