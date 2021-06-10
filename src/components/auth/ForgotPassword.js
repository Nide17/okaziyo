import React, { useState } from 'react'

const ForgotPassword = ({ error, sendResetLink }) => {

    const [fEmail, setFEmail] = useState('');
    const [showSent, setShowSent] = useState(false);
    const [errorsState, setErrorsState] = useState([])

    const onChangeHandler = e => {
        setErrorsState([]);
        setFEmail({ [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        // // VALIDATE
        // const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        // if (!fEmail.email) {
        //     setErrorsState(['Please provide your email!']);
        //     return
        // }
        // else if (!emailTest.test(fEmail.email)) {
        //     setErrorsState(['Please provide a valid email!']);
        //     return
        // }
        // else if (error.id === 'UNEXISTING_EMAIL') {
        //     setErrorsState([error.msg.msg]);
        //     return
        // }

        // // Attempt to send link
        // sendResetLink(fEmail);
        setShowSent(true)
    }

    return (
        <div className="container forgot-password mt-4">
            <div className="row mt-5 d-block text-center">

                {showSent ?
                    <h6 className="font-weight-bold my-5 py-5 text-success">
                        Reset link sent to {fEmail.email} succesfully!
                    </h6> :

                    <>
                        <h2 className="font-weight-bold my-3">Find your account here</h2>

                        <small>Provide your email to find your account</small>

                        <form className="my-4" onSubmit={onSubmitHandler}>

                            {errorsState.length > 0 ?
                                errorsState.map(err =>
                                    <div className="alert alert-danger" key={Math.floor(Math.random() * 1000)}>
                                        {err}
                                    </div>) :
                                null
                            }

                            <div className="input-group mx-auto search w-50">
                                <input type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder=" Email ..."
                                    onChange={onChangeHandler} />
                            </div>

                            <button  className="btn btn-sm btn-info mt-4 d-block mx-auto">Search</button>

                        </form>

                    </>

                }

            </div>
        </div>
    )
}

export default ForgotPassword;