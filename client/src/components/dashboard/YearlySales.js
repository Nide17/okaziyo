import React from 'react'

const YearlySales = () => {
    return (
        <div className="col-md-12 col-xl-4">
            <div className="card yearly-sales">
                <div className="card-block">
                    <h6 className="mb-4">Yearly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 8.638.32</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">80%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{ height: "7px" }}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YearlySales
