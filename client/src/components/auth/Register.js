import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth.actions';
import { clearErrors } from '../../redux/error/error.actions'
import PropTypes from 'prop-types';

const Register = ({ register, error }) => {

    const [state, setState] = useState({
        // initialy doesn't show
        name: '',
        email: '',
        password: '',
        msg: null
    })

    useEffect(() => {

        if (error.id !== null) {

            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                setState({ msg: error.msg.msg });
            } else {
                setState({ msg: null });
            }
        }
    }, [error])

    const onChangeHandler = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        const { name, email, password } = state;

        // Create user object
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        register(newUser);

        // Reset
        setState({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className="container">
            <div className="mt-5 w-50 mx-auto">
                <h1 className="text-center">Register</h1>

                {state.msg ? (
                    <div className="alert alert-danger">
                        {state.msg}
                    </div>) : null}

                <form onSubmit={onSubmitHandler}>

                    <div className="form-group">

                        <label htmlFor="name" className="font-weight-bold">Name</label>
                        <input type="text" name="name" value={state.name || ''} placeholder="Name ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <label htmlFor="email" className="font-weight-bold">Email</label>
                        <input type="email" name="email" value={state.email || ''} placeholder="Email ..." className="form-control mb-3" onChange={onChangeHandler} />

                        <label htmlFor="password" className="font-weight-bold">Password</label>
                        <input type="password" name="password" value={state.password || ''} placeholder="Password ..." className="form-control mb-3" onChange={onChangeHandler} />

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

Register.propTypes = {
    error: PropTypes.object,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
}

// Map  state props
const mapStateToProps = state => ({ error: state.errorReducer });

export default connect(mapStateToProps, { register, clearErrors })(Register);