import React from 'react'

const Categories = () => {

    return (
        <section className="categories d-none d-lg-block">
            <ul className="categories-list">

                <li className="category-item dropdown">
                    <a href="/electronics">
                        Electronics</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/computers">Computers & Accessories</a></li>
                        <li><a className="dropdown-item px-1" href="/phones">Phones & Accessories </a></li>
                        <li><a className="dropdown-item px-1" href="/printers">Printers</a></li>
                        <li><a className="dropdown-item px-1" href="/others-electronics">Others</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/fashion">
                        Fashion</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/clothes">Clothes</a></li>
                        <li><a className="dropdown-item px-1" href="/shoes">Shoes</a></li>
                        <li><a className="dropdown-item px-1" href="/others-fashion">Others</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/furniture">
                        Furniture</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/beds">Beds</a></li>
                        <li><a className="dropdown-item px-1" href="/chairs">Chairs</a></li>
                        <li><a className="dropdown-item px-1" href="/tables">Tables</a></li>
                        <li><a className="dropdown-item px-1" href="/others-furniture">Others</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/transport">
                        Transport</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/cars">Cars</a></li>
                        <li><a className="dropdown-item px-1" href="/motorcycles">Motorcycles</a></li>
                        <li><a className="dropdown-item px-1" href="/bicycles">Bicycles</a></li>
                        <li><a className="dropdown-item px-1" href="/others-transport">Others</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/real-estate">
                        Real Estate</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/plots">Land plots</a></li>
                        <li><a className="dropdown-item px-1" href="/houses">Houses</a></li>
                        <li><a className="dropdown-item px-1" href="/others-real-estate">Others</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/scholarships">
                        Scholarships</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/fully-funded">Fully funded</a></li>
                        <li><a className="dropdown-item px-1" href="/partially-funded">Partialy funded</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/jobs">
                        Jobs</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/full-time">Full-time</a></li>
                        <li><a className="dropdown-item px-1" href="/part-time">Part-time</a></li>
                        <li><a className="dropdown-item px-1" href="/internships">Internships</a></li>
                    </ul>
                </li>

                <li className="category-item dropdown">
                    <a href="/others">
                        Others</a> &nbsp;
                            <i className="fa fa-angle-down"></i>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="/tenders">Tenders</a></li>
                        <li><a className="dropdown-item px-1" href="/rents">Rents</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Categories