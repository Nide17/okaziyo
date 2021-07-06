import React, { useEffect } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { connect } from 'react-redux';
import { getCategories } from '../../../redux/categories/categories.actions'
import { getScholarships } from '../../../redux/items/scholarships/scholarships.actions'
import { getJobs } from '../../../redux/items/jobs/jobs.actions'
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Media, Alert } from 'reactstrap';
import SimilarScholarships from './SimilarScholarships';
import LatestJobs from './LatestJobs';

const ViewedScholarship = ({ jobs, scholarships, categories, getJobs, getScholarships, getCategories }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getCategories();
        getJobs();
        getScholarships();
    }, [getCategories, getJobs, getScholarships]);

    // Access route parameters
    const { scholarshipId } = useParams()

    const scholarshipToUse = scholarships && scholarships.allScholarships.find(scholarship => scholarship._id === scholarshipId)

    const categoryToUse = scholarshipToUse && categories && categories.allCategories.find(category =>
        category.sub_category.find(subcat => subcat._id === scholarshipToUse.sub_category))

    return (
        <Container className="slick-job my-lg-3 px-0 px-lg-3">

            <Row className="viewed-details">

                <Col sm="8" className="mx-0 px-0 px-lg-5 choosen-job">

                    {!scholarships.isLoading ?

                        <>
                            <Media className="mt-lg-2 p-3 border-bottom job-title d-flex flex-column flex-lg-row">

                                <Media left href="#" className="m-auto d-flex justify-content-center align-items-center">
                                    <img src={scholarshipToUse && `/uploads/scholarships/` + scholarshipToUse.brand_image} alt="" />
                                </Media>

                                <Media body>
                                    <Media heading className="p-3 py-lg-0 mb-0 h-100 d-flex flex-column justify-content-between">
                                        <strong className="text-info">
                                            {scholarshipToUse && scholarshipToUse.title}
                                        </strong>

                                        <div className="d-flex flex-column flex-lg-row justify-content-between font-weight-bolder text-secondary">
                                            <h6>{scholarshipToUse && scholarshipToUse.brand}</h6>

                                            <p>{categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === scholarshipToUse.sub_category).name}</p>
                                        </div>

                                        <div className="d-flex justify-content-between text-muted align-bottom">
                                            <p className="mb-0">
                                                Posted on {new Date(scholarshipToUse && scholarshipToUse.createdAt).toLocaleDateString()}
                                            </p>

                                            <p className="mb-0">
                                                Deadline: {new Date(scholarshipToUse && scholarshipToUse.deadline).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </Media>

                                </Media>

                            </Media>

                            <div className="job-description px-3 py-4">
                                <h3 className="font-weight-bolder mb-lg-3">Scholarship Description</h3>

                                <Markdown rehypePlugins={[rehypeHighlight]}>{scholarshipToUse && scholarshipToUse.markdown}
                                </Markdown>

                                <a href="https://chat.whatsapp.com/Db3xfvRz9JB527FpPLzWl2">
                                    <Alert color="info" className="text-center">
                                        Click here to join okaziyo.com's WhatsApp group to receive updates
                                    </Alert>
                                </a>

                            </div>
                        </> :

                        <div className="d-flex justify-content-center align-items-center">
                            <ReactLoading type="bars" color="#33FFFC" />
                        </div>}
                </Col>

                <Col sm="4" className="sidebar-content">
                    <SimilarScholarships scholarships={scholarships} scholarshipToUse={scholarshipToUse} categoryToUse={categoryToUse} />
                    <LatestJobs jobs={jobs && jobs} categories={categories} />
                </Col>
            </Row>

        </Container>
    )
}
// Map  state props
const mapStateToProps = state => ({
    jobs: state.jobsReducer,
    scholarships: state.scholarshipsReducer,
    categories: state.categoriesReducer
});

export default connect(mapStateToProps, { getScholarships, getJobs, getCategories })(ViewedScholarship);