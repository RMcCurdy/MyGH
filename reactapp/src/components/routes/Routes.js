import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';

// Pages
import Search from '../Search';

function Routes() {
    const { setPath } = useContext(AppContext);

    const location = useLocation();

    useEffect(() => {
        console.log('This is the location: ', location.pathname);
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
                {/* <Route path='/' exact component={Search} /> */}
            </Switch>
        </>
    );
}

export default Routes;