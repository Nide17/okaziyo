import React, { useState, useEffect } from 'react'
import "../assets/fonts/fontawesome/css/fontawesome-all.min.css"
import "../assets/plugins/animation/css/animate.min.css"
import "../assets/css/dashboard.css"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DHeader from '../DHeader'
import Navigation from '../Navigation'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useParams } from 'react-router-dom'
import { getCategories } from '../../../redux/categories/categories.actions'
import ReactLoading from "react-loading";

const ViewCategory = ({ auth, getCategories, categories }) => {

    const [showMob, setShowMob] = useState(false)

    // Lifecycle methods
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    // Access route parameters
    const { categoryId } = useParams()

    return (

        <div className="dashboard">

            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>

            <Navigation showMob={showMob} setShowMob={setShowMob} />
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
                                                            <Link to="/webmaster">{category.title}</Link>
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
                                                            <ReactLoading type="bars" color="#33FFFC" /> :
<>
                                                            {category.sub_category.map(subc => (

                                                            <Col sm="4" className="card-block">
                                                                        <h6 className="mb-4">{subc.name}</h6>

                                                                <div className="row d-flex align-items-center">
                                                                    <div className="col-8">
                                                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                                            <i className="feather icon-folder text-c-green f-30 m-r-10"></i>
                                                                            0
                                                                        </h3>
                                                                    </div>

                                                                    <div className="col-2 text-right">
                                                                        <p className="m-b-0">
                                                                            <i className="feather icon-plus-circle text-c-green f-30 m-r-10"></i>
                                                                        </p>
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

ViewCategory.propTypes = {
    auth: PropTypes.object
}

// Map  state props
const mapStateToProps = state => ({
    auth: state.authReducer,
    categories: state.categoriesReducer
});

export default connect(mapStateToProps, { getCategories })(ViewCategory);