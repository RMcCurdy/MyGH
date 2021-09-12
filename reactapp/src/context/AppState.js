import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
    // Search bar
    const [search, setSearch] = useState('');
    const [searchBool, setSearchBool] = useState(false);

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
                searchBool,
                setSearchBool,
                search,
                setSearch,
                name,
                setName,
                userName,
                setUserName,
                avatar,
                setAvatar,
                bio,
                setBio,
                followers,
                setFollowers,
                following,
                setFollowing,
                numOfRepos,
                setNumOfRepos,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
