import React, { Component } from 'react'
import logo from '../logo/Logo.svg'

class Footer extends Component {

    render() {

        return (
            <section className="container footer">

                <div className="row footerLinks">

                    <div className="col-12 col-md-3 logo">
                        <a className="footer-logo" href="#/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className="col-6 col-md-3 shops">
                        <h6 className="shops">Shops</h6>
                        <ul className="shops">
                            <li>Categories</li>
                            <li>Featured Brands</li>
                            <li>Hot Deals</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 community">
                    <h6 className="community">Community</h6>
                        <ul className="community">
                            <li>Featured Sellers</li>
                            <li>Terms of Use</li>
                            <li>Live Events</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 company">
                    <h6 className="company">Company</h6>
                        <ul className="company">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>History</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="row footerSocial">

                    <div className="col-12 col-xl-6 copyright">
                        <p>&copy; Okaziyo, Ltd. 2020. Browse, Buy & Sell comfortably!</p>
                    </div>
                    <div className="col-12 col-xl-6 icons">
                       <h6 className="text-center">Follow us</h6> 
                       <div className="selfIcons">
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-youtube"></i>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Footer