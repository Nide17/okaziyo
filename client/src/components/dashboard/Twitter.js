import React from 'react'

const Twitter = () => {
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-twitter text-c-blue f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>11,200</h3>
                            <h5 className="text-c-purple mb-0">+6.2% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-green" role="progressbar" style={{ width: "40%", height: "6px" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>4,567</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-blue" role="progressbar" style={{ width: "70%", height: "6px" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twitter
