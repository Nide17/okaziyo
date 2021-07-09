import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux';
import { getScholarships } from '../../../redux/items/scholarships/scholarships.actions'

import Slider from 'react-slick'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../slickItem.css'
import settings from '../slickSettings'
const SlickScholarshipPlaceholder = lazy(() => import('./SlickScholarshipPlaceholder'));

const ScholarshipSlick = ({ scholarships, getScholarships }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getScholarships();
    }, [getScholarships]);

    return (
        !scholarships.isLoading ?
            <section className="container featured">
                <div className="container">
                    <h5 className="lead text-left mb-4 ml-md-5 font-weight-bold">New Scholarships</h5>
                    <Slider {...settings}>
                        {
                            scholarships && scholarships.allScholarships.map((scholarship, id) => (
                                <Suspense
                                    key={id}
                                    fallback={
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>}>
                                    <SlickScholarshipPlaceholder slickScholarship={scholarship} />
                                </Suspense>))
                        }
                    </Slider>
                </div>
            </section> : null)
}

// Map  state props
const mapStateToProps = state => ({
    scholarships: state.scholarshipsReducer
});

export default connect(mapStateToProps, { getScholarships })(ScholarshipSlick);