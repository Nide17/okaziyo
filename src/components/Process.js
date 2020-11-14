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

                    <div className="col-4 process-grp">
                    <img src={sell} alt="sell" />
                    <h5>Sell Something.</h5>
                    <p>Plan. Take a few photos. Add a description. Set your price.</p>
                    </div>

                    <div className="col-4 process-grp">
                        <img src={ship} alt="ship" />
                        <h5>Ship it.</h5>
                        <p>No meetings. Printable shipping label emailed to seller.</p>
                    </div>

                    <div className="col-4 process-grp">
                        <img src={paid} alt="paid" />
                        <h5>Get Paid.</h5>
                        <p>Listing is free. We only charge a small commission when your sale is complete.</p>
                    </div>

                </div>

            </section>
        )
    }
}

export default Process