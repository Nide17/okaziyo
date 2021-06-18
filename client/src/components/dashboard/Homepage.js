import React, { useEffect } from 'react'
import { loadUser } from '../../redux/auth/auth.actions'
import store from '../../redux/store'

import "./assets/fonts/fontawesome/css/fontawesome-all.min.css"
import "./assets/plugins/animation/css/animate.min.css"
import "./assets/css/dashboard.css"

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import CategoriesSummary from './CategoriesSummary'
import ItemsSummary from './ItemsSummary'
import JobsSummary from './JobsSummary'
import ContactsMessages from './ContactsMessages'
import SubscribersSummary from './SubscribersSummary'
// import Facebook from './Facebook'
// import Twitter from './Twitter'
// import GooglePlus from './GooglePlus'
import AllUsers from './AllUsers'
import DHeader from './DHeader'
import Navigation from './Navigation'

const Homepage = ({ auth }) => {

    useEffect(() => {
        store.dispatch(loadUser())
    }, []);

    return (

        auth.isLoading ?
            <>
                <ReactLoading type="spinningBubbles" color="#33FFFC" />&nbsp;&nbsp;&nbsp;&nbsp; <br />
                <p className="d-block">Loading user ...</p>
            </> :

            auth.isAuthenticated ?

                <div className="dashboard">
                    {/*         
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div> */}


                    <Navigation />
                    <DHeader />

                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">

                                    <div className="main-body">
                                        <div className="page-wrapper">

                                            <div className="row">
                                                <CategoriesSummary />
                                                <ItemsSummary />
                                                <JobsSummary />
                                                <ContactsMessages />
                                                <SubscribersSummary />
                                                {/* <Facebook />
                                                <Twitter />
                                                <GooglePlus /> */}
                                                <AllUsers />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script src="assets/js/vendor-all.min.js"></script>
                    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
                    <script src="assets/js/pcoded.min.js"></script>
                </div> :

                <Redirect to="/login" />
    )
}

Homepage.propTypes = {
    auth: PropTypes.object
}

// Map  state props
const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps, null)(Homepage);