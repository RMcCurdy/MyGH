import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
    // Search bar value
    const [search, setSearch] = useState('');

    // Current user information
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [numOfRepos, setNumOfRepos] = useState('');

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
