import React, { useEffect } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { connect } from 'react-redux';
import { getCategories } from '../../redux/categories/categories.actions'
import { getJobs } from '../../redux/items/jobs/jobs.actions'
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Media, Alert } from 'reactstrap';
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
        <Container className="slick-job my-lg-3 px-0 px-lg-3">

            <Row>

                <Col sm="8" className="mx-0 px-0 px-lg-5">

                    {!jobs.isLoading ?

                        <>
                            <Media className="mt-lg-2 p-3 border-bottom job-title d-flex flex-column flex-lg-row">

                                <Media left href="#" className="m-auto d-flex justify-content-center align-items-center">
                                    <img src={jobToUse && jobToUse.brand_image} data-src={log} alt="" />
                                </Media>

                                <Media body>
                                    <Media heading className="px-3 py-3 py-lg-0 mb-0 h-100 d-flex flex-column justify-content-between">
                                        <h4 className="text-info">{jobToUse && jobToUse.title}</h4>

                                        <div className="d-flex flex-column flex-lg-row justify-content-between font-weight-bolder text-secondary">
                                            <h6>{jobToUse && jobToUse.brand}</h6>

                                            <p>{categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === jobToUse.sub_category).name}</p>
                                        </div>

                                        <div className="d-flex justify-content-between text-muted align-bottom">
                                            <p className="mb-0">Posted on {new Date(jobToUse && jobToUse.createdAt).toLocaleDateString()}</p>
                                            <h6 className="mb-0">Deadline: {new Date(jobToUse && jobToUse.deadline).toLocaleDateString()}</h6>
                                        </div>
                                    </Media>

                                </Media>

                            </Media>

                            <div className="job-description px-3 py-lg-4">
                                <h4 className="font-weight-bolder mb-lg-3">Job Description</h4>

                                <Markdown rehypePlugins={[rehypeHighlight]}>{jobToUse && jobToUse.markdown}</Markdown>

                            </div>
                        </> :
                        <ReactLoading type="bars" color="#33FFFC" />}
                </Col>

                <Col sm="4">
                    <div className="similar-jobs mt-4 mt-lg-2">
                        <Alert color="dark">
                            Similar jobs
                        </Alert>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam debitis assumenda labore, id delectus sed repudiandae eius culpa exercitationem cupiditate.</p>
                    </div>

                    <div className="similar-jobs mt-lg-5">
                        <Alert color="dark">
                            Other jobs
                        </Alert>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam debitis assumenda labore, id delectus sed repudiandae eius culpa exercitationem cupiditate.</p>
                    </div>

                    <div className="similar-jobs mt-lg-5">
                        <Alert color="dark">
                            New scholarships
                        </Alert>
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