import React from 'react'
import avatar1 from "./assets/images/user/avatar-1.jpg"
import avatar3 from "./assets/images/user/avatar-3.jpg"
import ReactLoading from "react-loading";

const AllUsers = ({ auth }) => {

    return (

        <div className="col-xl-8 col-md-12 m-b-30">

            <ul className="nav nav-tabs" id="myTab" role="tablist">

                <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Admins</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Visitors</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active show" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All users</a>
                </li>

            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{ width: "40px" }} src={avatar1} alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-green">Online</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{ width: "40px" }} src={avatar1} alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-green">Online</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>


                <div className="tab-pane fade active show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>

                        <tbody>

                            {auth.isLoading ?
                                <ReactLoading type="spinningBubbles" color="#33FFFC" /> :

                                <>
                                    {auth && auth.users.map(user => (
                                        <tr key={user._id}>
                                            <td>
                                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar3} alt="activity-user" />{user.name}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">{user.email}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">{new Date(user.date_registered).toLocaleDateString()}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0 text-c-green">Online</h6>
                                            </td>
                                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                        </tr>
                                    ))}
                                </>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUsers