import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux';
import { getJobs } from '../../../redux/items/jobs/jobs.actions'

import Slider from 'react-slick'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../slickItem.css'
import settings from '../slickSettings'
const SlickJobPlaceholder = lazy(() => import('./SlickJobPlaceholder'));

const JobsSlick = ({ jobs, getJobs }) => {

  // Lifecycle methods to load items
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    !jobs.isLoading ?
      <section className="container featured">
        <div className="container">
          <h5 className="lead text-left mb-4 ml-md-5 font-weight-bold">New Jobs</h5>
          <Slider {...settings}>
            {
              jobs && jobs.allJobs.map((job, id) => (
                <Suspense
                  key={id}
                  fallback={

                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>}>
                  <SlickJobPlaceholder slickJob={job} />
                </Suspense>))
            }
          </Slider>
        </div>
      </section> : null)
}

// Map  state props
const mapStateToProps = state => ({
  jobs: state.jobsReducer
});

export default connect(mapStateToProps, { getJobs })(JobsSlick);