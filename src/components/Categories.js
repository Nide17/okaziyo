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
                    <li><h5>Electronics</h5></li>
                    <li><h5>Fashion</h5></li>
                    <li><h5>Furniture</h5></li>
                    <li><h5>Cars, Motorcycles & Bikes</h5></li>
                    <li><h5>Books</h5></li>
                    <li><h5>Properties</h5></li>
                    <li><h5>Others</h5></li>
                </ul>
            </section>
        )
    }
}

export default Categories