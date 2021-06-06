import React from 'react'

const Categories = () => {

    return (
        <section className="categories d-none d-lg-block">
            <ul className="categories-list">

                <li className="category-item dropdown">
                    <a href="/#">
                        Electronics &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Computers & Accessories</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Phones & Accessories </a></li>
                        <li><a className="dropdown-item px-1" href="#/">Printers</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Others</a></li>
                    </ul>

                </li>

                <li className="category-item dropdown">
                    <a href="/#">
                        Fashion &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Clothes</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Shoes</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Others</a></li>
                    </ul>

                </li>

                <li className="category-item dropdown">
                    <a href="/#">
                        Furniture &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Beds</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Chairs</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Tables</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Others</a></li>
                    </ul>

                </li>

                <li className="category-item dropdown">
                    <a href="/#">
                        Transport &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Cars</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Motorcycles</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Bicycles</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Others</a></li>
                    </ul>

                </li>

                <li className="category-item dropdown">
                    <a href="/#">
                        Real Estate &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Land plots</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Houses</a></li>
                        <li><a className="dropdown-item px-1" href="#/">Others</a></li>
                    </ul>

                </li>

                <li className="category-item dropdown">
                    <a href="/#">
                        Others &nbsp;
                            <i className="fa fa-angle-down"></i>
                    </a>

                    {/* dropdown */}
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item px-1" href="#/">Miscellaneous</a></li>
                    </ul>

                </li>

                <li>
                    <a href="/#">
                        Help &nbsp;
                            <i className="fa fa-question-circle mr-2"></i>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Categories