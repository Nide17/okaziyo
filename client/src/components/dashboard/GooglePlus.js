import React from 'react'

const GooglePlus = () => {
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-google-plus-g text-c-red f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>10,500</h3>
                            <h5 className="text-c-blue mb-0">+5.9% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>25,998</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "80%", height: "6px" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>7,753</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: "50%", height: "6px" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GooglePlus
