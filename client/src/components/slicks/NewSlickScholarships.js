import React from 'react'
import PropTypes from 'prop-types'
import icon from "./undraw_developer_activity_bv83 1.svg"

const NewSlickScholarships = ({ slickItem }) => {

    return (
        <div className="slickItem-card card mx-auto my-0">
            <div className="img-holder">
                <img src={icon} className="card-img-top img-fluid" alt="..." />
            </div>

            <div className="card-body body-holder">
                <p className="card-text slickItem-description text-center mb-0 mt-2">
                    {slickItem.name}
                </p>

                <div className="card-body text-center pb-1">
                    <p className="card-text instructor">
                        <span>at </span>
                        <a href="/">{slickItem.name}</a>
                    </p>
                </div>

                <div className="card-body text-center py-0">
                    <span className="card-link"><small>Full time</small></span>
                    <span className="card-link"><small>Posted</small></span>
                </div>

                <div className="card-body text-center pb-1">
                    <a href={`/slickItem/${slickItem.id}`} className="slickItem-button card-link btn btn-primary">View Job</a>
                    <span href="/" className="card-link">Deadline</span>
                </div>

            </div>
        </div>
    )
}

NewSlickScholarships.propTypes = {
    slickItem: PropTypes.object,
}
export default NewSlickScholarships;