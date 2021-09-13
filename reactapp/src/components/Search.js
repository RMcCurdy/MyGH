import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const Search = () => {
    const {
        // Search bar context
        search,
        setSearch,
        searchBool,
        setSearchBool,
        // Setters for user information
        setName,
        setUserName,
        setAvatar,
        setBio,
        setFollowers,
        setFollowing,
        setNumOfRepos,
    } = useContext(AppContext);

    const setData = ({
        name,
        login,
        avatar_url,
        bio,
        followers,
        following,
        public_repos,
    }) => {
        setName(name);
        setUserName(login);
        setAvatar(avatar_url);
        setBio(bio);
        setFollowers(followers);
        setFollowing(following);
        setNumOfRepos(public_repos);
    };

    const handleSubmit = () => {
        console.log('Starting submit');
        fetch(`https://api.github.com/users/${search}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

    return (
        <>
            <div id='stars-container'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>

            <div
                style={{
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '2px solid purple',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <GitHubIcon className='github-logo-search-main' />
                </div>
                {/* To be used to display a black background behind github logo */}
                {/* <div style={{ display: 'flex', border: '2px solid blue' }}>
                    <div className='github-logo-search-main-background' />
                </div> */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                        border: '2px solid blue',
                    }}>
                    <TextField
                        variant='filled'
                        onKeyPress={(ev) => {
                            // console.log(`Pressed keyCode ${ev.key}`);
                            if (ev.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                        fontFamily: 'Roboto',
                    }}>
                    <Button
                        style={{
                            textTransform: 'none',
                        }}
                        variant='contained'>
                        Search
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Search;
