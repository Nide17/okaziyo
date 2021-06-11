import { Route } from "react-router-dom";
// Make sure to place css after bootstrap
import Placeholder from './components/others/Placeholder';

const CategoriesRoutes = () => {
    return (
        <>
            {/* Categories */}
            <Route exact path="/electronics" component={Placeholder} />
            <Route exact path="/computers" component={Placeholder} />
            <Route exact path="/phones" component={Placeholder} />
            <Route exact path="/printers" component={Placeholder} />
            <Route exact path="/others-electronics" component={Placeholder} />
            <Route exact path="/fashion" component={Placeholder} />
            <Route exact path="/clothes" component={Placeholder} />
            <Route exact path="/shoes" component={Placeholder} />
            <Route exact path="/furniture" component={Placeholder} />
            <Route exact path="/beds" component={Placeholder} />
            <Route exact path="/chairs" component={Placeholder} />
            <Route exact path="/tables" component={Placeholder} />
            <Route exact path="/others-furniture" component={Placeholder} />
            <Route exact path="/transport" component={Placeholder} />
            <Route exact path="/cars" component={Placeholder} />
            <Route exact path="/motorcycles" component={Placeholder} />
            <Route exact path="/bicycles" component={Placeholder} />
            <Route exact path="/others-transport" component={Placeholder} />
            <Route exact path="/real-estate" component={Placeholder} />
            <Route exact path="/plots" component={Placeholder} />
            <Route exact path="/houses" component={Placeholder} />
            <Route exact path="/others-real-estate" component={Placeholder} />
            <Route exact path="/fully-funded" component={Placeholder} />
            <Route exact path="/partially-funded" component={Placeholder} />
            <Route exact path="/jobs" component={Placeholder} />
            <Route exact path="/full-time" component={Placeholder} />
            <Route exact path="/part-time" component={Placeholder} />
            <Route exact path="/internships" component={Placeholder} />
            <Route exact path="/others" component={Placeholder} />
            <Route exact path="/tenders" component={Placeholder} />
            <Route exact path="/rents" component={Placeholder} />
        </>
    );
}

export default CategoriesRoutes;
