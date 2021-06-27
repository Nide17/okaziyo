import React, { useState } from 'react'
import logo from '../logo/Logo.svg'
import Logosm from '../logo/Logosm.svg'

const Header = () => {

    const [state, setState] = useState({
        menu: false,
        showElectronicsItems: false,
        showFashionItems: false,
        showFurnitureItems: false,
        showTransportItems: false,
        showEstateItems: false,
        showScholarshipsItems: false,
        showJobsItems: false,
        showOthersItems: false,
        isSearchOpen: false,
        isBuying: false
    })

    const ChangeBuying = () => {
        setState({
            isBuying: !state.isBuying
        })
    }

    const openSearch = () => {
        setState({
            isSearchOpen: !state.isSearchOpen
        })
    }

    const toggleMenu = () => {
        setState({
            menu: !state.menu,

        })
    }

    const onElectronicsItemClick = () => {
        setState({
            showElectronicsItems: !state.showElectronicsItems,
            menu: true
        })
    }

    const onFashionItemClick = () => {
        setState({
            showFashionItems: !state.showFashionItems,
            menu: true
        })
    }

    const onFurnitureItemClick = () => {
        setState({
            showFurnitureItems: !state.showFurnitureItems,
            menu: true
        })
    }

    const onTransportItemClick = () => {
        setState({
            showTransportItems: !state.showTransportItems,
            menu: true
        })
    }

    const onEstateItemClick = () => {
        setState({
            showEstateItems: !state.showEstateItems,
            menu: true
        })
    }

    const onScholarshipsItemClick = () => {
        setState({
            showScholarshipsItems: !state.showScholarshipsItems,
            menu: true
        })
    }

    const onJobsItemClick = () => {
        setState({
            showJobsItems: !state.showJobsItems,
            menu: true
        })
    }

    const onOthersItemClick = () => {
        setState({
            showOthersItems: !state.showOthersItems,
            menu: true
        })
    }

    const classNavSearch = state.menu ? "nav-search col-12 col-lg-6 collapse navbar-collapse show" : "nav-search col-12 col-lg-6 collapse navbar-collapse";
    const classNavSearchOpen = state.isSearchOpen ? "nav-search w-100 show mt-2 mb-0 py-4" : "nav-search w-100  d-lg-none";
    const elecBuyClass = state.showElectronicsItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const fashBuyClass = state.showFashionItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const furnBuyClass = state.showFurnitureItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const transBuyClass = state.showTransportItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const estBuyClass = state.showEstateItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const schBuyClass = state.showScholarshipsItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const jobsBuyClass = state.showJobsItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"
    const othBuyClass = state.showOthersItems ? "category-item show-details dropdown item-buy mt-3" : "category-item dropdown item-buy mt-3"

    let loc = window.location

    if (loc.pathname === '/' || loc.pathname === '/about' || loc.pathname === '/know-more-process' || loc.pathname === '/privacy' || loc.pathname === '/disclaimer' || loc.pathname === '/terms' || loc.pathname === '/feat-brands' || loc.pathname === '/hot-deals' || loc.pathname === '/all-products' || loc.pathname === '/slickItem' || loc.pathname === '/electronics' || loc.pathname === '/computers' || loc.pathname === '/phones' || loc.pathname === '/printers')

        return (

            <div className="container-fluid">

                <nav className="row navbar navbar-expand-lg navbar-light mx-0">

                    <div className="col-7 col-lg-3 navbar-toggler-holder px-0">

                        <button className="navbar-toggler ml-2" type="button" onClick={toggleMenu}>
                            <span>
                                <i className="fa fa-bars"></i>
                            </span>
                        </button>

                        <a className="navbar-brand d-none d-lg-flex" href="/">
                            <img src={logo} alt="logo" />
                        </a>

                        <a className="navbar-brand-small d-block d-lg-none ml-1" href="/">
                            <img src={Logosm} alt="Logosm" width="73px" height="30px" />
                        </a>
                    </div>

                    <div className="nav-buttons col-5 col-lg-3 d-flex d-lg-none px-0">
                        <button className="search-sm" onClick={openSearch}>
                            <i className="fa fa-search"></i>
                        </button>

                        <button className="btn sell mr-2 py-1 px-1" type="button" onClick={ChangeBuying}>
                            {state.isBuying ? 'Buy now' : 'Sell now'}
                        </button>
                    </div>

                    {/* SEARCH FOR LARGE*/}
                    <div className={classNavSearchOpen}>
                        <form className="px-1">
                            <div className="form-group row mx-1">
                                <input className="form-control" type="search" placeholder="What do you want to buy?" aria-label="Search" />
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={classNavSearch}>

                        {/* SEARCH FOR LARGE*/}
                        <form className="d-none d-sm-block">
                            <div className="form-group row">
                                <input className="form-control" type="search" placeholder="What do you want to buy?" aria-label="Search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </div>
                        </form>

                        {/* FOR MOBILE */}
                        <div className={"nav-buttons col-lg-3 d-flex d-lg-none justify-content-around mr-4 px-4"}>

                            <div className="auth d-flex justify-content-around w-100">
                                <a href="/register">
                                    <button className="btn my-1" type="button">Register</button>
                                </a>
                                <a href="/login"><button className="btn my-1" type="button">Login</button></a>
                            </div>

                            <div className="buy mt-3">

                                <ul className="categories-list-mobile">

                                    <li className={elecBuyClass} onClick={onElectronicsItemClick}>
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

                                    <li className={fashBuyClass} onClick={onFashionItemClick}>
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

                                    <li className={furnBuyClass} onClick={onFurnitureItemClick}>
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

                                    <li className={transBuyClass} onClick={onTransportItemClick}><a href="/transport">
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

                                    <li className={estBuyClass} onClick={onEstateItemClick}><a href="/real-estate">
                                        Real Estate</a> &nbsp;
                                        <i className="fa fa-angle-down"></i>

                                        {/* dropdown */}
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item px-1" href="/plots">Land plots</a></li>
                                            <li><a className="dropdown-item px-1" href="/houses">Houses</a></li>
                                            <li><a className="dropdown-item px-1" href="/others-real-estate">Others</a></li>
                                        </ul>
                                    </li>

                                    <li className={schBuyClass} onClick={onScholarshipsItemClick}><a href="/scholarships">
                                        Scholarships</a> &nbsp;
                                        <i className="fa fa-angle-down"></i>

                                        {/* dropdown */}
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item px-1" href="/fully-funded">Fully funded</a></li>
                                            <li><a className="dropdown-item px-1" href="/partially-funded">Partialy funded</a></li>
                                        </ul>
                                    </li>

                                    <li className={jobsBuyClass} onClick={onJobsItemClick}><a href="/jobs">
                                        Jobs</a> &nbsp;
                                        <i className="fa fa-angle-down"></i>

                                        {/* dropdown */}
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item px-1" href="/full-time">Full-time</a></li>
                                            <li><a className="dropdown-item px-1" href="/part-time">Part-time</a></li>
                                            <li><a className="dropdown-item px-1" href="/internships">Internships</a></li>
                                        </ul>
                                    </li>

                                    <li className={othBuyClass} onClick={onOthersItemClick}><a href="/others">
                                        Others</a> &nbsp;
                                        <i className="fa fa-angle-down"></i>
                                        {/* dropdown */}
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item px-1" href="/tenders">Tenders</a></li>
                                            <li><a className="dropdown-item px-1" href="/rents">Rent</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* FOR LARGE */}
                    <div className={"nav-buttons col-6 col-lg-3 d-none d-lg-flex justify-content-around pl-0 mr-4"}>

                        <button className="btn sell px-lg-2" type="button" onClick={ChangeBuying}>
                            {state.isBuying ? 'Buy now!' : 'Sell now!'}
                        </button>
                        <a href="/register">
                            <button className="btn px-lg-2" type="button">Register</button>
                        </a>
                        <a href="/login"><button className="btn px-lg-2" type="button">Login</button></a>
                    </div>
                </nav>
            </div>
        )

    else return null;

}

export default Header