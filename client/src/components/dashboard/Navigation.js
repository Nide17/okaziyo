import React from 'react'

const Navigation = () => {

    return (

        <nav className="pcoded-navbar">

            <div className="navbar-wrapper">

                <div className="navbar-brand header-logo">
                    <a href="#/" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Okaziyo</span>
                    </a>
                    <a className="mobile-menu" id="mobile-collapse" href="#/"><span></span></a>
                </div>

                <div className="navbar-content scroll-div">

                    <ul className="nav pcoded-inner-navbar">

                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>

                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                            <a href="#/" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Categories</label>
                        </li>

                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">

                            {/* <a href="javascript:" className="nav-link "> */}
                            <a href="#/" className="nav-link ">

                                <span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Details</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="bc_button.html" className="">Electronics</a></li>
                                <li className=""><a href="bc_badges.html" className="">Fashion</a></li>
                                <li className=""><a href="bc_breadcrumb-pagination.html" className="">Furniture</a></li>
                                <li className=""><a href="bc_collapse.html" className="">Transport</a></li>
                                <li className=""><a href="bc_tabs.html" className="">Real Estate</a></li>
                                <li className=""><a href="bc_typography.html" className="">Scholarships</a></li>
                                <li className=""><a href="icon-feather.html" className="">Jobs</a></li>
                                <li className=""><a href="icon-feather.html" className="">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Items</label>
                        </li>

                        <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                            <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">For sale</span></a>
                        </li>

                        <li data-username="Table bootstrap datatable footable" className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">For rent</span></a>
                        </li>

                        <li data-username="Table bootstrap datatable footable" className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Jobs</span></a>
                        </li>

                        <li data-username="Table bootstrap datatable footable" className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Scholarships</span></a>
                        </li>

                        <li data-username="Table bootstrap datatable footable" className="nav-item">
                            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Tenders</span></a>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Miscellaneous</label>
                        </li>

                        <li data-username="Charts Morris" className="nav-item">
                            <a href="chart-morris.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Users</span></a></li>

                        <li data-username="Maps Google" className="nav-item">
                            <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Contacts</span></a></li>

                        <li data-username="Maps Google" className="nav-item">
                            <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Subscribers</span></a></li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navigation
