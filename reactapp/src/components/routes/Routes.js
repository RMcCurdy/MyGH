import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';

// Pages
import Search from '../Search';
import About from '../About';
import PageNotFound from '../PageNotFound';

function Routes() {
    const { setPath } = useContext(AppContext);

    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location, setPath]);

    return (
        <>
            <Switch>
                <Route
                    path='/GitHubProfileOverviewAPI/'
                    exact
                    component={Search}
                />
                <Route
                    path='/GitHubProfileOverviewAPI/about/'
                    exact
                    component={About}
                />
                <Route component={PageNotFound} />
            </Switch>
        </>
    );
}

export default Routes;
