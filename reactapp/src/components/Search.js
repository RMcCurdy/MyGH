import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Search = () => {
    const { search, setSearch } = useContext(AppContext);
    return <div>hi</div>;
};

export default Search;
