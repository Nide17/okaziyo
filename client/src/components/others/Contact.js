import React, { useState } from 'react'

const Contact = () => {

    const [state, setState] = useState({
        contact_name: '',
        email: '',
        message: ''
    })

    const onChangeHandler = e => {
        const { name, value } = e.target
        setState(state => ({ ...state, [name]: value }))
    };

    const onContact = e => {
        e.preventDefault();

        // const { contact_name, email, message } = state;

        // Create user object
        // const contactMsg = {
        //     contact_name,
        //     email,
        //     message
        // };

        // Attempt to contact
        // sendMsg(contactMsg);

        // Reset fields
        setState({
            contact_name: '',
            email: '',
            message: ''
        })
    }

    return (
        <div>
            <div className="jumbotron m-md-5 py-0 text-center text-center">
                <h1 className="display-5 pt-4 font-weight-bold">Let's connect!</h1>
                <p className="lead">
                    Okaziyo is a web application that helps people to buy, sell or rent anything. It gives people good time to search, plan and decide what to buy, sell or rent. It also gives information about jobs and scholarships and tenders.
                </p>

                <hr className="my-2" />
                <p>Do you need further information? Don't hesitate to contact us!</p>
            </div>

            <div className="row mx-2 px-1 mx-md-5 px-md-5 contact d-md-flex justify-content-center">

                <div className="col-sm-12">
                    <h5 className="text-center mb-md-3 font-weight-bolder">Contact the admin</h5>
                </div>

                <div className="col-sm-6 mb-5">

                    <form onSubmit={onContact}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="contact_name" placeholder="Name" minLength="4" maxLength="30" onChange={onChangeHandler} value={state.contact_name} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={onChangeHandler} value={state.email} required />
                        </div>

                        <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Message" minLength="10" maxLength="300" onChange={onChangeHandler} value={state.message} required />
                        </div>
                        <button className="btn btn-primary mt-2">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact