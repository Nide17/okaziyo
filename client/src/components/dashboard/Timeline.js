import React from 'react'
import avatar1 from "./assets/images/user/avatar-1.jpg"
import avatar2 from "./assets/images/user/avatar-2.jpg"
import avatar3 from "./assets/images/user/avatar-3.jpg"

const Timeline = () => {
    return (

        <div className="col-xl-8 col-md-12 m-b-30">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Today</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active show" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">This Week</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
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
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>

                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar2} alt="activity-user" />Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                            </tr>

                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar3} alt="activity-user" />Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar1} alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar2} alt="activity-user" />Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                            </tr>
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
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar1} alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar3} alt="activity-user" />Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar3} alt="activity-user" />Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                            </tr>
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
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar2} alt="activity-user" />Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ width: "40px" }} src={avatar1} alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Timeline
