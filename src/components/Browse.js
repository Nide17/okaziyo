import React, { Component } from 'react'
import sell from '../logo/sell.svg'

class Browse extends Component {
    render() {
        return (
            <section className="container things">
                <div className="row contents">
                    <h4 className="col-12">Browse Something to Buy</h4>

                    <div className="popular d-flex col-12 text-left font-weight-bolder ml-md-5 pl-md-4">
                        <h5 className="mr-3 font-weight-bolder h-6 h-md-5">Popular items to buy</h5>
                        <p className="text-success">See all items</p>
                    </div>
                    <div className="cards">

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2 oneCard">
                            <div className="item-holder">
                                <div className="item">
                                    <img src={sell} alt="sell" />
                                    <h6>Item Name</h6>
                                    <p className="price">Price</p>
                                    <p className="desc px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 load-more-holder">
                        <button className="btn load-more" type="button">Load More</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Browse
