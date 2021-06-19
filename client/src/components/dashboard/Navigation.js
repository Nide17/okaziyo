import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/categories/categories.actions'

const Navigation = ({ categories, getCategories, showMob }) => {

    // Lifecycle methods
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const [show, setShow] = useState(false)
    const [navBarCollapsed, setNavBarCollapsed] = useState(false)

    return (

        <nav className={`pcoded-navbar ${showMob ? 'mob-open' : navBarCollapsed ? 'navbar-collapsed' : ''}`}>

            <div className="navbar-wrapper">

                <div className="navbar-brand header-logo">
                    <a href="/" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Okaziyo</span>
                    </a>
                    <a className={`mobile-menu ${navBarCollapsed ? 'on' : ''}`} id="mobile-collapse" href="#/" onClick={() => setNavBarCollapsed(!navBarCollapsed)}>
                        <span></span>
                    </a>
                </div>

                <div className="navbar-content scroll-div">

                    <ul className="nav pcoded-inner-navbar">

                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>

                        <li className="nav-item active">
                            <a href="#/" className="nav-link ">
                                <span className="pcoded-micon">
                                    <i className="feather icon-home"></i>
                                </span>
                                <span className="pcoded-mtext">Dashboard</span></a>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Categories</label>
                        </li>

                        <li className={`nav-item pcoded-hasmenu ${show ? 'pcoded-trigger' : null}`} onClick={() => setShow(!show)}>

                            <a href="#/" className="nav-link ">

                                <span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Details</span></a>

                            <ul className={`pcoded-submenu ${show ? 'd-block' : 'd-none'}`}>

                                {categories && categories.allCategories.map(category => (
                                    <li key={category._id}>
                                        <a href="#/">{category.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Items</label>
                        </li>

                        <li className="nav-item">
                            <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">For sale</span></a>
                        </li>

                        <li className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">For rent</span></a>
                        </li>

                        <li className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Jobs</span></a>
                        </li>

                        <li className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Scholarships</span></a>
                        </li>

                        <li className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Tenders</span></a>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Miscellaneous</label>
                        </li>

                        <li className="nav-item">
                            <a href="chart-morris.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Users</span></a></li>

                        <li className="nav-item">
                            <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Contacts</span></a></li>

                        <li className="nav-item">
                            <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Subscribers</span></a></li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer
})

export default connect(mapStateToProps, { getCategories })(Navigation)