import React from 'react'
import logo from '../logo/Logo.svg'

const Footer = () => {

    if (window.location.pathname === '/register' || window.location.pathname === '/login' || window.location.pathname === '/dashboard') return null;

    return (
        <section className="container footer px-2">

            <div className="row footerLinks">

                <div className="col-12 col-md-3 mb-3 logo">
                    <a className="footer-logo" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>

                <div className="col-6 col-md-3 shops">
                    <h6 className="shops">Shops</h6>
                    <ul className="shops">
                        <li><a href="/feat-brands">Featured Brands</a></li>
                        <li><a href="/hot-deals">Hot Deals</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-3 community">
                    <h6 className="community">Community</h6>
                    <ul className="community">
                        <li><a href="/disclaimer">Disclaimer</a></li>
                        <li><a href="/privacy">Privacy policy</a></li>
                        <li><a href="/terms">Terms of use</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-3 company">
                    <h6 className="company">Company</h6>
                    <ul className="company">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="row footerSocial">

                <div className="col-12 col-xl-6 copyright">
                    <p>&copy; Okaziyo, Ltd. 2021. Browse, Buy & Sell comfortably!</p>
                </div>
                <div className="col-12 col-xl-6 icons px-0">
                    <h6 className="text-center">Follow us</h6>
                    <div className="selfIcons">
                        <a href="twitter.com"><i className="fa fa-twitter"></i></a>
                        <a href="facebook.com"><i className="fa fa-facebook"></i></a>
                        <a href="linkedin.com"><i className="fa fa-linkedin"></i></a>
                        <a href="instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="youtube.com"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer