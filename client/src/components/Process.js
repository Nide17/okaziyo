import React, { Component } from 'react'
import sell from '../logo/sell.svg'
import ship from '../logo/ship.svg'
import paid from '../logo/paid.svg'


class Process extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {

        return (
            <section className="container processes">
                <div className="row groups">

                    <div className="col-12 col-md-4">
                        <div className="process-grp">
                            <img src={sell} alt="sell" />
                            <h5>Sell Something.</h5>
                            <p>Plan. Take a few photos. Add a description. Set your price.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="process-grp">
                            <img src={ship} alt="ship" />
                            <h5>Ship it.</h5>
                            <p>Only necessary physical contacts happen. Talk with the buyer for shipping process.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="process-grp">
                            <img src={paid} alt="paid" />
                            <h5>Get Paid.</h5>
                            <p>Listing is free. Buying is free. We are happy when your transaction is complete.</p>
                        </div>
                    </div>

                </div>

                <div className="row mx-0 know-more-container">
                    <div className="col-12 know-more">
                        <a href="/know-more-process">
                            <button className="btn" type="button">More on the process</button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Process