import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import LoginModal from './components/auth/LoginModal'
import ReactLoading from "react-loading";

// Make sure to place css after bootstrap
import Placeholder from './components/others/Placeholder';

const CategoriesRoutes = ({ auth }) => {
    return (

        auth.isLoading ?
            <div className="d-flex justify-content-center align-items-center m-5 p-5">
                <ReactLoading type="spinningBubbles" color="#33FFFC" />&nbsp;&nbsp;&nbsp;&nbsp; <br />
                <p className="d-block">Loading user ...</p>
            </div> :

            auth.isAuthenticated ?

                <>
                    {/* Categories */}
                    <Route exact path="/electronics" component={Placeholder} />
                    <Route exact path="/computers" component={Placeholder} />
                    <Route exact path="/phones" component={Placeholder} />
                    <Route exact path="/printers" component={Placeholder} />
                    <Route exact path="/others" component={Placeholder} />
                    <Route exact path="/fashion" component={Placeholder} />
                    <Route exact path="/clothes" component={Placeholder} />
                    <Route exact path="/shoes" component={Placeholder} />
                    <Route exact path="/furniture" component={Placeholder} />
                    <Route exact path="/beds" component={Placeholder} />
                    <Route exact path="/chairs" component={Placeholder} />
                    <Route exact path="/tables" component={Placeholder} />
                    <Route exact path="/others" component={Placeholder} />
                    <Route exact path="/transport" component={Placeholder} />
                    <Route exact path="/cars" component={Placeholder} />
                    <Route exact path="/motorcycles" component={Placeholder} />
                    <Route exact path="/bicycles" component={Placeholder} />
                    <Route exact path="/others" component={Placeholder} />
                    <Route exact path="/real" component={Placeholder} />
                    <Route exact path="/plots" component={Placeholder} />
                    <Route exact path="/houses" component={Placeholder} />
                    <Route exact path="/others" component={Placeholder} />
                    <Route exact path="/fully" component={Placeholder} />
                    <Route exact path="/partially" component={Placeholder} />
                    <Route exact path="/jobs" component={Placeholder} />
                    <Route exact path="/full" component={Placeholder} />
                    <Route exact path="/part" component={Placeholder} />
                    <Route exact path="/internships" component={Placeholder} />
                    <Route exact path="/others" component={Placeholder} />
                    <Route exact path="/tenders" component={Placeholder} />
                    <Route exact path="/rents" component={Placeholder} />
                </> :
                <LoginModal />
    );
}

// Map  state props
const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, null)(CategoriesRoutes);