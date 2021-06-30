import React, { useEffect } from 'react'
import ReactLoading from "react-loading";
import { connect } from 'react-redux';
import { getItems } from '../redux/items/items.actions'

const BrowseItems = ({ items, getItems }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getItems();
    }, [getItems]);

    return (
        <section className="container things">
            <div className="row contents">
                <h4 className="col-12">Browse new products to buy</h4>

                <div className="latest d-flex col-12 text-left font-weight-bolder mb-3">
                    <h5 className="mr-3 ml-md-5 pl-md-4 font-weight-bolder h-6 h-md-5">Latest items to buy</h5>
                    <a href="/all-products">
                        <p className="text-success">See all items</p>
                    </a>
                </div>

                <div className="cards">

                    {items.isLoading ?

                        <div className="d-flex justify-content-center align-items-center">
                            <ReactLoading type="bars" color="#33FFFC" />
                        </div> :

                        <>
                            {items && items.allItems.map(item => (
                                <div className="col-6 col-md-3 col-xl-2 oneCard">
                                    <div className="item-holder">
                                        <div className="item">
                                            <img src={item.pictures[0]} alt="sell" />
                                            <h6>{item.title}</h6>
                                            <p className="price">{item.price}</p>
                                            <p className="desc">{item.description}</p>
                                        </div>
                                    </div>
                                </div>))}
                        </>}

                </div>
                <div className="col-12 load-more-holder">
                    <button className="btn load-more" type="button">Load More</button>
                </div>
            </div>
        </section>
    )
}

// Map  state props
const mapStateToProps = state => ({
    items: state.itemsReducer,
});

export default connect(mapStateToProps, { getItems })(BrowseItems);