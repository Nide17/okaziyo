import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCategories } from '../../../redux/categories/categories.actions'
import { connect } from 'react-redux';

const SlickJobPlaceholder = ({ slickJob, categories, getCategories }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const categoryToUse = categories && categories.allCategories.find(category =>
        category.sub_category.find(subcat => subcat._id === slickJob.sub_category))

    return (
        <div className="slickItem-card card mx-auto my-0">
            <div className="img-holder">
                <img src={slickJob.brand_image} alt={slickJob.brand} className="card-img-top img-fluid" />
            </div>

            <div className="card-body body-holder pt-2">
                <h6 className="card-text slickItem-description text-center mx-2 my-0 mx-lg-3">
                    {slickJob.title}
                </h6>

                <div className="card-body text-center py-1 mx-2 mx-lg-3">
                    <p className="card-text instructor">
                        <span>at </span>
                        <a href="#/">{slickJob.brand}</a>
                    </p>
                </div>

                <div className="card-body text-center py-0 px-lg-4 d-flex justify-content-between">
                    <span className="card-link">
                        <small>
                            {categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === slickJob.sub_category).name}
                        </small>
                    </span>
                    <span className="card-link deadline">
                        <small>Deadline: {new Date(slickJob.deadline).toLocaleDateString()}</small>
                    </span>
                </div>

                <div className="card-body text-center pb-1">

                    <a href={`/slickJob/${slickJob._id}`} className="slickItem-button card-link btn btn-primary">View job</a>

                    <span href="/" className="card-link ml-lg-5">
                    Posted on {new Date(slickJob.updatedAt).toLocaleDateString()}
                    </span>
                    
                </div>

            </div>
        </div>
    )
}

SlickJobPlaceholder.propTypes = {
    slickJob: PropTypes.object,
}

// Map  state props
const mapStateToProps = state => ({
    categories: state.categoriesReducer
});

export default connect(mapStateToProps, { getCategories })(SlickJobPlaceholder);