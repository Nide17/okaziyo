import React, { Component } from 'react'

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

                <nav className="row no-gutters navbar navbar-expand-lg navbar-light bg-light" >

                    {
                        /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button> */
                    }

                    <div className="col-2">

                        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="navbar-brand" href="#/"> Navbar </a>
                    </div>

                    {
                        /* <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> */
                    }

                    <div className={"collapse navbar-collapse " + show}>

                        <form className="form-inline my-2 my-lg-0">

                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Search</button>
                        </form>

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <li className="nav-item active">
                                <a className="nav-link" href="#/"> Home<span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item" >
                                <a className="nav-link" href="#/"> Link </a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header