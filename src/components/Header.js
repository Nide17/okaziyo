import React, { useState } from 'react'
import logo from '../logo/Logo.svg'
import Logosm from '../logo/Logosm.svg'

const Header = () => {

    const [state, setState] = useState({
        menu: false,
        isBuying: false
    })

    const toggleMenu = () => {
        setState({
            menu: !state.menu
        })
    }

    const ChangeBuying = () => {
        setState({
            isBuying: !state.isBuying
        })
    }

    const show = (state.menu) ? "show" : "";

    return (

        <div className="container-fluid">

            <nav className="row navbar navbar-expand-lg navbar-light mx-0">

                {
                    /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */
                }

                <div className="col-6 col-lg-3 navbar-toggler-holder">

                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <span>
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>

                    <a className="navbar-brand d-none d-lg-flex" href="#/">
                        <img src={logo} alt="logo" />
                    </a>

                    <a className="navbar-brand-small d-block d-lg-none" href="#/">
                        <img src={Logosm} alt="Logosm" />
                    </a>
                </div>

                {
                    /* <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> */
                }

                <div className="nav-buttons col-6 col-lg-3 d-flex d-lg-none px-0">
                    <button className="search-sm" type="submit">
                        <i className="fa fa-search"></i>
                    </button>

                    <button className="btn sell mr-3" type="button" onClick={ChangeBuying}>{state.isBuying ? 'Buy now' : 'Sell now'}</button>
                </div>

                <div className={"nav-search col-12 col-lg-6 collapse navbar-collapse " + show}>

                    <form>
                        <div className="form-group row mx-0">
                            <input className="form-control" type="search" placeholder="What do you want to buy?" aria-label="Search" />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>

                    {/* FOR MOBILE */}
                    <div className={"nav-buttons col-8 col-lg-3 d-flex d-lg-none justify-content-around mr-4"}>
                        <button className="btn my-1" type="button">Sign up</button>
                        <button className="btn my-1" type="button">Login</button>

                        <div className="buy mt-3">
                            <h5>Buy</h5>
                            <ul>
                                <li className="item-buy mt-3">Electronics<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Fashion<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Furniture<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Vehicles<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Books<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Properties<i className="fa fa-angle-right"></i></li>
                                <li className="item-buy mt-3">Others<i className="fa fa-angle-right"></i></li>
                            </ul>
                        </div>

                        <div className="help mt-3">
                            <i className="fa fa-question-circle mr-2"></i>
                            <p>Help</p>
                        </div>

                    </div>
                </div>

                {/* FOR LARGE */}
                <div className={"nav-buttons col-6 col-lg-3 d-none d-lg-flex justify-content-around pl-0 mr-4"}>

                    <button className="btn sell px-lg-2" type="button" onClick={ChangeBuying}>
                        {state.isBuying ? 'Buy now!' : 'Sell now!'}
                    </button>

                    <button className="btn px-lg-2" type="button">Sign up</button>
                    <button className="btn px-lg-2" type="button">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header