import React, { useEffect } from 'react'
import avatar2 from "./assets/images/user/avatar-2.jpg"
import { connect } from 'react-redux'
import { getContacts } from '../../redux/contacts/contacts.actions'
import ReactLoading from "react-loading";

const ContactsMessages = ({ contacts, getContacts }) => {

    // Lifecycle methods
    useEffect(() => {
        getContacts();
    }, [getContacts]);

    return (

        <div className="col-xl-8 col-md-6">
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Contacts</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="table-responsive">

                        {contacts.isLoading ?
                            <ReactLoading type="spinningBubbles" color="#33FFFC" /> :

                            <table className="table table-hover">
                                <tbody>

                                    {contacts && contacts.allContacts.map(category => (
                                        <tr className="unread">

                                            <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar2} alt="activity-user" /></td>

                                            <td>
                                                <h6 className="mb-1">{category.contact_name}</h6>
                                                <p className="m-0">{category.message}</p>
                                            </td>

                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                                                    {new Date(category.contact_date).toLocaleString("en-GB")}
                                                </h6>
                                            </td>

                                            <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>

                                        </tr>))}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    contacts: state.contactsReducer
})

export default connect(mapStateToProps, { getContacts })(ContactsMessages)