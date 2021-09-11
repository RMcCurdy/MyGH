import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
    const [search, setSearch] = useState(null);

    return (
        <AppContext.Provider
            value={{
                search,
                setSearch,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
