import React from 'react'
import PropTypes from 'prop-types'
import icon from "./undraw_developer_activity_bv83 1.svg"

const NewSlickItem = ({ slickItem }) => {

    return (
        <div className="slickItem-card card mx-auto my-1">
            <div className="img-holder">
                <img src={icon} className="card-img-top img-fluid" alt="..." />
            </div>

            <div className="card-body body-holder">
                <p className="card-text slickItem-description text-center mb-0 mt-2">
                    {slickItem.name}
                </p>
                <div className="card-body text-center pb-1">
                    <p className="card-text instructor"><span>By: </span><a href="/">Eng. John Doe</a></p>
                </div>
                <div className="card-body text-center py-0">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="card-link ml-2">4.2(250)</span>
                </div>
                <div className="card-body text-center pb-1">
                    <a href={`/slickItem/${slickItem.id}`} className="slickItem-button card-link btn btn-primary">View Job</a>
                    <span href="/" className="card-link">$15.00</span>
                </div>
            </div>
        </div>
    )
}

NewSlickItem.propTypes = {
    slickItem: PropTypes.object,
}
export default NewSlickItem;
