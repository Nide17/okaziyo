import React from 'react'
import avatar1 from "./assets/images/user/avatar-1.jpg"
import avatar2 from "./assets/images/user/avatar-2.jpg"
import avatar3 from "./assets/images/user/avatar-3.jpg"

const RecentUsers = () => {
    return (

        <div className="col-xl-8 col-md-6">
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Contacts</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="table-responsive">
                        <table className="table table-hover">
                        
                            <tbody>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar1} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Isabella Christensen</h6>
                                        <p className="m-0">Lorem Ipsum is simply…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar2} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Mathilde Andersen</h6>
                                        <p className="m-0">Lorem Ipsum is simply text of…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>11 MAY 10:35</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar3} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Karla Sorensen</h6>
                                        <p className="m-0">Lorem Ipsum is simply…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>9 MAY 17:38</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar1} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Ida Jorgensen</h6>
                                        <p className="m-0">Lorem Ipsum is simply text of…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted f-w-300"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>19 MAY 12:56</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar2} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Albert Andersen</h6>
                                        <p className="m-0">Lorem Ipsum is simply dummy…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 July 12:56</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>

                                <tr className="unread">
                                    <td><img className="rounded-circle" style={{ width: "40px" }} src={avatar2} alt="activity-user" /></td>
                                    <td>
                                        <h6 className="mb-1">Albert Andersen</h6>
                                        <p className="m-0">Lorem Ipsum is simply dummy…</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 July 12:56</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">View</a><a href="#!" className="label theme-bg text-white f-12">Reply</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentUsers
