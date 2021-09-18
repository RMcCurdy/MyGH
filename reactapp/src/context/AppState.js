import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
    // Search bar
    const [search, setSearch] = useState('');
    const [searchBool, setSearchBool] = useState('');

    const [animation, setAnimation] = useState(false);

    // Current user information
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [numOfRepos, setNumOfRepos] = useState('');
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [languagePercentages, setLanguagePercentages] = useState([]);

    // Routes and navigation
    const [path, setPath] = useState('');

    return (
        <AppContext.Provider
            value={{
                path,
                setPath,
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
                repos,
                setRepos,
                languages,
                setLanguages,
                languagePercentages,
                setLanguagePercentages,
                animation,
                setAnimation,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
