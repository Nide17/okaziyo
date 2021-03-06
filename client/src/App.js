import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Make sure to place css after bootstrap
import './App.css';
import 'font-awesome/css/font-awesome.css'
import Header from './components/Header';
import Footer from './components/Footer';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import Main from './Main';
import Placeholder from './components/others/Placeholder';
import Disclaimer from './components/others/Disclaimer';
import Privacy from './components/others/Privacy';
import Terms from './components/others/Terms';
import Contact from './components/others/Contact';
import About from './components/others/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Unsubscribe from './components/auth/Unsubscribe';
import Subscribe from './components/auth/Subscribe';
import Logout from './components/auth/Logout'
import ViewedJob from './components/slicks/jobs/ViewedJob'
import ViewedScholarship from './components/slicks/scholarships/ViewedScholarship'

import CategoriesRoutes from './CategoriesRoutes';
import DashboardRoutes from './components/dashboard/DashboardRoutes';

// REDUX
import store from './redux/store'
import { loadUser } from './redux/auth/auth.actions'
import { Provider } from 'react-redux'

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <div className="App">

      <Provider store={store}>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/know-more-process" component={Placeholder} />
            <Route exact path="/slickJob/:jobId" component={ViewedJob} />
            <Route exact path="/slickScholarship/:scholarshipId" component={ViewedScholarship} />

            {/* auth */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/unsubscribe" component={Unsubscribe} />
            <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />

            {/* footer */}
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/feat-brands" component={Placeholder} />
            <Route exact path="/hot-deals" component={Placeholder} />


            {/* Dashboard */}
            <DashboardRoutes />

            {/* Categories */}
            <CategoriesRoutes />            
            
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/all-products" component={Placeholder} />
            <Route path="/slickItem" component={Placeholder} />

          </Switch>
        </Router>
        <Footer />

      </Provider>

    </div>
  );
}

export default App;