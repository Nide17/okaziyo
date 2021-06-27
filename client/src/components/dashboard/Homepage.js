import React, { useState } from 'react'
// import { loadUser } from '../../redux/auth/auth.actions'

// import store from '../../redux/store'
import "./assets/fonts/fontawesome/css/fontawesome-all.min.css"
import "./assets/plugins/animation/css/animate.min.css"
import "./assets/css/dashboard.css"

import PropTypes from 'prop-types';
import DHeader from './DHeader'
import Navigation from './Navigation'
import CategoriesSummary from './categories/CategoriesSummary'
import ItemsSummary from './ItemsSummary'
import JobsSummary from './JobsSummary'
import ContactsMessages from './ContactsMessages'
import SubscribersSummary from './SubscribersSummary'
// import Facebook from './Facebook'
// import Twitter from './Twitter'
// import GooglePlus from './GooglePlus'
import AllUsers from './AllUsers'

const Homepage = ({ auth, jobs, items, categories, contacts, subscribers }) => {

    const [showMob, setShowMob] = useState(false)

    return (
                <div className="dashboard">

                    <div className="loader-bg">
                        <div className="loader-track">
                            <div className="loader-fill"></div>
                        </div>
                    </div>

                    <Navigation showMob={showMob} setShowMob={setShowMob} categories={categories}/>
                    <DHeader showMob={showMob} setShowMob={setShowMob} />

                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">

                                    <div className="main-body">
                                        <div className="page-wrapper">

                                            <div className="row">
                                                <CategoriesSummary auth={auth} categories={categories} />
                                                <ItemsSummary items={items} />
                                                <JobsSummary jobs={jobs}/>
                                                <ContactsMessages contacts={contacts}/>
                                                <SubscribersSummary subscribers={subscribers} />
                                                {/* <Facebook />
                                                    <Twitter />
                                                    <GooglePlus /> */}
                                                <AllUsers auth={auth}/>
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
                </div>
    )
}

Homepage.propTypes = {
    auth: PropTypes.object
}

export default Homepage;