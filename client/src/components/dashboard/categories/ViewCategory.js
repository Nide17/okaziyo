import React, { useState } from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useParams } from 'react-router-dom'
import ReactLoading from "react-loading";
import "../assets/fonts/fontawesome/css/fontawesome-all.min.css"
import "../assets/plugins/animation/css/animate.min.css"
import "../assets/css/dashboard.css"
import plusItem from '../../../images/plus.svg';

import DHeader from '../DHeader'
import AddItem from './AddItem'
import Navigation from '../Navigation'

const ViewCategory = ({ categories, jobs, scholarships, items }) => {

    const [showMob, setShowMob] = useState(false)

    // Access route parameters
    const { categoryId } = useParams()

    return (

        <div className="dashboard">

            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>

            <Navigation showMob={showMob} setShowMob={setShowMob} categories={categories} />
            <DHeader showMob={showMob} setShowMob={setShowMob} />

            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">

                            <div className="main-body">
                                <div className="page-wrapper">

                                    {categories && categories.allCategories.map(category => (

                                        (category._id === categoryId) ?

                                            <div className="mt-2 mx-1" key={category._id}>

                                                <Row className="mb-0 mb-lg-3 mx-0">
                                                    <Breadcrumb>
                                                        <BreadcrumbItem>
                                                            <Link to="/dashboard">
                                                                {category.title}
                                                            </Link>
                                                        </BreadcrumbItem>
                                                        <BreadcrumbItem active>Sub-categories</BreadcrumbItem>
                                                    </Breadcrumb>
                                                </Row>

                                                <small className="ml-2 one-cat-desc">
                                                    <i className="text-success text-left">
                                                        "{category.description}"
                                                    </i>
                                                </small>

                                                <div className="col-md-6 col-xl-10">
                                                    <Row className="mb-0 mb-lg-3 mx-0 card Monthly-sales d-flex flex-row">

                                                        {categories.isLoading ?
                                                            <div className="d-flex justify-content-center align-items-center">
                                                                <ReactLoading type="bars" color="#33FFFC" />
                                                            </div> :

                                                            <>
                                                                {category.sub_category.map(subc => (

                                                                    <Col sm="4" className="card-block" key={subc._id}>
                                                                        <h6 className="mb-4">{subc.name}</h6>

                                                                        <div className="row d-flex align-items-center">
                                                                            <div className="col-8">
                                                                                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                                                    <i className="feather icon-folder text-c-green f-30 m-r-10"></i>

                                                                                    {/* Count the number of items in sub category */}
                                                                                    
                                                                                    {category._id === '60cddc21181fa53764a17296' ?

                                                                                        jobs.allJobs.filter(job =>
                                                                                            job.sub_category === subc._id).length :

                                                                                        category._id === '60cddc0f181fa53764a17295' ?

                                                                                            scholarships.allScholarships.filter(scholarship =>
                                                                                                scholarship.sub_category === subc._id).length :

                                                                                            items.allItems.filter(item =>
                                                                                                item.sub_category === subc._id).length
                                                                                    }
                                                                                </h3>
                                                                            </div>

                                                                            <div className="col-2 text-right">

                                                                                {category._id === '60cddc21181fa53764a17296' ?

                                                                                    <Link to={`/dashboard/create-job/${subc._id}`} className="text-secondary">
                                                                                        <img src={plusItem} alt="" width="16" height="16" />
                                                                                    </Link> :

                                                                                    category._id === '60cddc0f181fa53764a17295' ?

                                                                                        <Link to={`/dashboard/create-scholarship/${subc._id}`} className="text-secondary">
                                                                                            <img src={plusItem} alt="" width="16" height="16" />
                                                                                        </Link> :

                                                                                        <div className="m-b-0">
                                                                                            <AddItem categoryId={category._id} sub_categoryName={subc.name} />
                                                                                        </div>
                                                                                }

                                                                            </div>

                                                                            <div className="col-2 text-right">
                                                                                <p className="m-b-0">
                                                                                    <i className="feather icon-eye text-c-green f-30 m-r-10"></i>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="progress m-t-30" style={{ height: "7px" }}>
                                                                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: "100%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                                        </div>
                                                                    </Col>))}
                                                            </>}

                                                    </Row>
                                                </div>

                                            </div> :
                                            null
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="assets/js/vendor-all.min.js"></script>
            <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/pcoded.min.js"></script>
        </div>
    )
}
export default ViewCategory;