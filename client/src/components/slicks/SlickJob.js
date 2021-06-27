import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getCategories } from '../../redux/categories/categories.actions'
import { getJobs } from '../../redux/items/jobs/jobs.actions'
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Media } from 'reactstrap';
import log from '../../images/logoDashb.jpg'

const SlickJob = ({ jobs, categories, getJobs, getCategories }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getCategories();
        getJobs();
    }, [getCategories, getJobs]);


    // Access route parameters
    const { jobId } = useParams()

    const jobToUse = jobs && jobs.allJobs.find(job => job._id === jobId)

    const categoryToUse = jobToUse && categories && categories.allCategories.find(category =>
        category.sub_category.find(subcat => subcat._id === jobToUse.sub_category))

    return (
        <Container className="slick-job">

            <Row>

                <Col sm="8">

                    {!jobs.isLoading ?

                        <>
                            <Media className="mt-lg-5">

                                <Media left href="#" className="my-auto d-flex justify-content-center align-items-center">
                                    <img src={log} data-src={log} alt="Generic placeholder" />
                                </Media>

                                <Media body>
                                    <Media heading className="px-lg-4">
                                        <h4 className="font-weight-bolder">{jobToUse && jobToUse.title}</h4>

                                        <div className="d-flex justify-content-between">
                                            <h6>{jobToUse && jobToUse.brand}</h6>

                                            <p>{categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === jobToUse.sub_category).name}</p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p>Posted on {new Date(jobToUse && jobToUse.createdAt).toLocaleDateString()}</p>
                                            <h6>Deadline: {new Date(jobToUse && jobToUse.deadline).toLocaleDateString()}</h6>
                                        </div>
                                    </Media>

                                </Media>

                            </Media>

                            <div className="job-description px-lg-4 mt-3">
                                <h4>Job Description</h4>
                                <p>
                                    {jobToUse && jobToUse.markdown}
                                </p>
                            </div>
                        </> :
                        <ReactLoading type="bars" color="#33FFFC" />}
                </Col>

                <Col sm="4">
                    <div className="sidebar mt-lg-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam debitis assumenda labore, id delectus sed repudiandae eius culpa exercitationem cupiditate.</p>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
// Map  state props
const mapStateToProps = state => ({
    jobs: state.jobsReducer,
    categories: state.categoriesReducer
});

export default connect(mapStateToProps, { getJobs, getCategories })(SlickJob);