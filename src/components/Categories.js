import React, { Component } from 'react'

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {

        return (
            <section className="categories">
                <ul className="categories-list">
                    <li>
                        <a href="/#">
                            Electronics &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Fashion &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Furniture &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Cars, Motorcycles & Bikes &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Books &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Properties &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            Others &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Categories