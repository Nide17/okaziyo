import { Route } from "react-router-dom";
// Make sure to place css after bootstrap
import Homepage from './Homepage';
import ViewCategory from './categories/ViewCategory';

const DashboardRoutes = () => {
    return (
        <>
            {/* Dashboard */}
            <Route exact path="/dashboard" component={Homepage} />
            <Route exact path="/dashboard/view-category/:categoryId" component={ViewCategory} />
        </>
    );
}

export default DashboardRoutes;
