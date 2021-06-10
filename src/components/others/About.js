import React from 'react'
import parmenide from '../../images/Parmenideimg.png'
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import whatsapp from '../../images/whatsapp.svg';

const About = () => {
    return (
        <div>
            <div className="jumbotron m-md-5 py-0 text-center">
                <h1 className="display-5 pt-3 font-weight-bold">Okaziyo</h1>
                <p className="lead">
                    Okaziyo is a web application that helps people to buy, sell or rent anything. It gives people good time to search, plan and decide what to buy, sell or rent. It also gives information about jobs and scholarships and tenders.
                </p>

                <hr className="my-2" />
                <p>Reach us on <strong>
                    <a href="mailto:okaziyo.com@gmail.com?subject=Contact%20okaziyo">okaziyo.com.rw@gmail.com</a>
                </strong> for further details.</p>
            </div>

            <div className="row about mx-md-5 my-md-5">
                <div className="col-sm 12">
                    <h5 className="text-center mb-md-5 mt-0 pt-0 font-weight-bolder">About the author</h5>
                </div>

                <div className="col-sm-12 px-2 d-flex flex-column flex-sm-row justify-content-center align-items-center">
                    <img className="card-img-top w-50" src={parmenide} alt="card-img" />

                    <div className="card-body">

                        <h4 className="card-title">Niyomwungeri Parmenide Ishimwe</h4>
                        <p className="card-text font-weight-bold">Owner & Developer</p>
                        <p>
                            <strong>
                                <img src={whatsapp} alt="" width="20" height="20" />&nbsp;&nbsp;0788551997
                        </strong>
                        </p>

                        <div className="d-flex">
                            <button className="btn btn-link btn-sm ml-0 pl-0 mr-2">
                                <a href="https://www.linkedin.com/in/niyomwungeri-parmenide-ishimwe-1a5394123/">
                                    <img src={linkedin} alt="" width="20" height="20" />
                                </a>
                            </button>

                            <button className="btn btn-link btn-sm mx-2">
                                <a href="https://www.instagram.com/ishimwe_parmenide/">
                                    <img src={instagram} alt="" width="20" height="20" />
                                </a>
                            </button>

                            <button className="btn btn-link btn-sm mx-2">
                                <a href="https://www.facebook.com/nide.drogba.7/">
                                    <img src={facebook} alt="" width="20" height="20" />
                                </a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
