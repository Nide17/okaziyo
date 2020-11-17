import React, { Component } from 'react'
import logo from '../logo/Logo.svg'
import Logosm from '../logo/Logosm.svg'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {

        const show = (this.state.menu) ? "show" : "";

        return (

            <div className="container-fluid">

                <nav className="row no-gutters navbar navbar-expand-lg navbar-light">

                    {
                        /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button> */
                    }

                    <div className="col-6 col-lg-2 navbar-toggler-holder">

                        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <span>
                                <i class="fa fa-bars"></i>
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

                    <div className="nav-buttons col-6 col-lg-3 d-flex d-lg-none">
                        <button className="search-sm" type="submit"><i class="fa fa-search"></i></button>
                        <button className="btn sellNow" type="button">Sell now!</button>
                    </div>

                    <div className={"nav-search col-12 col-lg-7 collapse navbar-collapse " + show}>

                        <form>
                            <div className="form-group row">
                                <input className="form-control" type="search" placeholder="What do you want to buy?" aria-label="Search" />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>

                        <div className={"nav-buttons col-6 col-lg-3 d-flex d-lg-none"}>
                            <button className="btn" type="button">Sign up</button>
                            <button className="btn" type="button">Login</button>
                        </div>
                    </div>

                    <div className={"nav-buttons col-6 col-lg-3 d-none d-lg-flex"}>
                        <button className="btn" type="button">Sell now!</button>
                        <button className="btn" type="button">Sign up</button>
                        <button className="btn" type="button">Login</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header