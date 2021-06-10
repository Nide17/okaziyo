import React, { useState } from 'react'

const ResetPassword = ({ sendNewPassword }) => {

    const [newPasswords, setNewPasswords] = useState({
        password: '',
        password1: ''
    });
    const [showResetSuccess, setShowResetSuccess] = useState(false);
    const [errorsState, setErrorsState] = useState([])

    const onChangeHandler = e => {
        setErrorsState([]);
        setNewPasswords({ ...newPasswords, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        // const { password, password1 } = newPasswords;

        // // Simple validation
        // if (!password || !password1) {
        //     setErrorsState(['Fill empty fields!']);
        //     return
        // }

        // else if (password !== password1) {
        //     setErrorsState(['Passwords must match!']);
        //     return
        // }

        // // Exploit token and userId from URL
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // const token = urlParams.get('token')
        // const userId = urlParams.get('id')

        // // Create new pswd object
        // const updatePsw = {
        //     userId,
        //     token,
        //     password
        // };

        // // Attempt to reset
        // sendNewPassword(updatePsw);
        setShowResetSuccess(true)
    }

    return (

        <div className="container forgot-password mt-4">
            <div className="row mt-5 d-block text-center">

                {showResetSuccess ?
                    <h6 className="font-weight-bold my-5 py-5 text-success">
                        Account reset successful, Please Login!
                    </h6> :

                    <>
                        <h2 className="font-weight-bold my-3">Change your password here</h2>

                        <small>Provide matching passwords to reset your account</small>

                        <form className="my-4" onSubmit={onSubmitHandler}>

                            {errorsState.length > 0 ?
                                errorsState.map(err =>
                                    <div className="alert alert-danger" key={Math.floor(Math.random() * 1000)}>
                                        {err}
                                    </div>) :
                                null
                            }

                            <div className="input-group mx-auto my-5 search w-50">
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder=" Create password ..."
                                    onChange={onChangeHandler} />
                            </div>

                            <div className="input-group mx-auto my-5 search w-50">
                                <input type="password"
                                    name="password1"
                                    className="form-control"
                                    placeholder=" Verify password ..."
                                    onChange={onChangeHandler} />
                            </div>

                            <button className="btn btn-sm btn-info mt-4 d-block mx-auto">Reset</button>

                        </form>
                    </>

                }

            </div>
        </div>
    )
}

export default ResetPassword;