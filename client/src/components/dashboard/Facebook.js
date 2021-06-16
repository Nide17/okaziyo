import React from 'react'

const Facebook = () => {
    return (
        <div className="col-md-12 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-facebook-f text-primary f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>12,281</h3>
                            <h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>35,098</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "60%", height: "6px" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>3,539</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: "60%", height: "6px" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facebook
