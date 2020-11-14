import React, { Component } from 'react'
import logo from '../../logo/Logo.svg'

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

                        <a className="navbar-brand" href="#/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>

                    {
                        /* <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> */
                    }

                    <div className={"col-7 collapse navbar-collapse" + show}>

                        <form style={{width: "545px"}}>
                        <div className="form-group row">
                            <input className="form-control" type="search" placeholder=" What do you want to buy?" aria-label="Search" />
                            </div>
                        </form>
                    </div>

                    <div className="col-3">
                        <button className="btn" type="button" style={{background: "#499167", borderRadius: "6px"}}>Sell now!</button>
                        <button className="btn" type="button"  style={{background: "#FFFFFF", border: "1px solid #499167", borderRadius: "6px"}}>Sign up</button>
                        <button className="btn" type="button" style={{background: "#FFFFFF", border: "1px solid #499167", borderRadius: "6px"}}>Login</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header