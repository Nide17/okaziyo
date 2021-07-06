import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCategories } from '../../../redux/categories/categories.actions'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'

const SlickScholarshipPlaceholder = ({ slickScholarship, categories, getCategories }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const location = useLocation();
    
    const categoryToUse = categories && categories.allCategories.find(category =>
        category.sub_category.find(subcat => subcat._id === slickScholarship.sub_category))

    return (
        <div className="slickItem-card card mx-auto my-0">
            <div className="img-holder">
                <img src={location.pathname + `uploads/scholarships/` + slickScholarship.brand_image} alt={slickScholarship.brand} className="card-img-top img-fluid" />
            </div>

            <div className="card-body body-holder pt-2">
                <h6 className="card-text slickItem-description text-center mx-2 my-0 mx-lg-3">
                    {slickScholarship.title}
                </h6>

                <div className="card-body text-center pb-1 mx-2 mx-lg-3">
                    <p className="card-text instructor">
                        <span>at </span>
                        <a href="#/">{slickScholarship.brand}</a>
                    </p>
                </div>

                <div className="card-body text-center py-0 px-lg-4 d-flex justify-content-between">
                    <span className="card-link">
                        <small>
                            {categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === slickScholarship.sub_category).name}
                        </small>
                    </span>
                    <span className="card-link deadline">
                        <small>Deadline: {new Date(slickScholarship.deadline).toLocaleDateString()}</small>
                    </span>
                </div>

                <div className="card-body text-center pb-1">

                    <a href={`/slickScholarship/${slickScholarship._id}`} className="slickItem-button card-link btn btn-primary">View scholarship</a>

                    <span href="/" className="card-link ml-lg-5">
                        Posted on {new Date(slickScholarship.updatedAt).toLocaleDateString()}
                    </span>

                </div>

            </div>
        </div>
    )
}

SlickScholarshipPlaceholder.propTypes = {
    slickScholarship: PropTypes.object,
}

// Map  state props
const mapStateToProps = state => ({
    categories: state.categoriesReducer
});

export default connect(mapStateToProps, { getCategories })(SlickScholarshipPlaceholder);