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

                <div className="latest d-flex text-left font-weight-bold">
                    <h5 className="lead text-left mb-4 font-weight-bold ml-md-5 pl-md-4">Latest items to buy</h5>
                </div>

                <div className="cards">

                    {items.isLoading ?

                        <div className="d-flex justify-content-center align-items-center">
                            <ReactLoading type="bars" color="#33FFFC" />
                        </div> :

                        <>
                            {items && items.allItems.map(item => (
                                <div key={item._id} className="col-6 col-md-3 col-xl-2 oneCard">
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
                    <button className="btn load-more" type="button">More items</button>
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