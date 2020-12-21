import React, { Component } from 'react'

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {

        return (
            <section className="categories d-none d-lg-block">
                <ul className="categories-list">
                    <li>
                        <a href="/#">
                            Electronics &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Fashion &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Furniture &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Cars, Motorcycles & Bikes &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Books &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Properties &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Others &nbsp;
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Categories