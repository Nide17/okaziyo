import React, { useEffect } from 'react'
import { Route } from "react-router-dom";
// Make sure to place css after bootstrap
import Homepage from './Homepage';
import ViewCategory from './categories/ViewCategory';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/categories/categories.actions'
import { getItems } from '../../redux/items/items.actions'
import { getContacts } from '../../redux/contacts/contacts.actions'
import { getSubscribers } from '../../redux/subscribers/subscribers.actions'
import { getUsers } from '../../redux/auth/auth.actions'
import LoginModal from '../../components/auth/LoginModal'
import ReactLoading from "react-loading";

const DashboardRoutes = ({
    auth, items, getItems, categories, getCategories, contacts, getContacts, subscribers, getSubscribers, getUsers }) => {

    // Lifecycle methods to load items
    useEffect(() => {
        getItems();
        getCategories();
        getContacts();
        getSubscribers();
        getUsers();
    }, [getItems, getCategories, getContacts, getSubscribers, getUsers]);

    return (
        
        auth.isLoading ?
            <div className="d-flex justify-content-center align-items-center m-5 p-5">
                <ReactLoading type="spinningBubbles" color="#33FFFC" />&nbsp;&nbsp;&nbsp;&nbsp; <br />
                <p className="d-block">Loading user ...</p>
            </div> :

            auth.isAuthenticated ?
                <>
                    {/* Dashboard */}
                    <Route
                        exact path="/dashboard"
                        render={() => <Homepage
                            auth={auth}
                            categories={categories}
                            items={items}
                            contacts={contacts}
                            subscribers={subscribers} />} />

                    <Route
                        exact path="/dashboard/view-category/:categoryId"
                        render={() => <ViewCategory categories={categories} auth={auth} />} />
                </> :
                <LoginModal />
    );
}

// Map  state props
const mapStateToProps = state => ({
    auth: state.authReducer,
    items: state.itemsReducer,
    categories: state.categoriesReducer,
    contacts: state.contactsReducer,
    subscribers: state.subscribersReducer,
});

export default connect(mapStateToProps, { getItems, getCategories, getContacts, getSubscribers, getUsers })(DashboardRoutes);