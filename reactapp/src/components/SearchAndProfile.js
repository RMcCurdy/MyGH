import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Search from './Search';
import Profile from './Profile';

const SearchAndProfile = () => {
    const { searchBool } = useContext(AppContext);

    return <>{searchBool === true ? <Profile /> : <Search />}</>;
};

export default SearchAndProfile;
