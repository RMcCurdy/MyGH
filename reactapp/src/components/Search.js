import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                <Input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder='Placeholder'
                    inputProps={{ 'aria-label': 'description' }}
                />
                <Button onClick={handleSubmit} variant='contained'>
                    Search
                </Button>
            </div>
        </>
    );
};

export default Search;
