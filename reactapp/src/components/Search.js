import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// const useStyles = makeStyles({
//     root: {
//         color: 'black',
//         fontFamily: 'Roboto-Medium',
//         textTransform: 'none',
//     },
// });

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            color: 'white',
            backgroundColor: '#191F24',
            fontFamily: 'Roboto-Regular',
            '& fieldset': {
                border: '1px solid #495b69',
            },
            '&:hover fieldset': {
                border: '2px solid #495b69',
            },
            '&.Mui-focused fieldset': {
                border: '3px solid #495b69',
            },
        },
    },
})(TextField);

const CssButton = withStyles({
    root: {
        textTransform: 'none',
        fontFamily: 'Roboto-Medium',
        backgroundColor: 'white',
        color: '#191F24',
    },
})(Button);

const Search = () => {
    const {
        // Search bar context
        search,
        setSearch,
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

            <div className='search-main-container'>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <div className='github-logo-search-main-background' />
                    <GitHubIcon className='github-logo-search-main' />
                    {/* To be used to display a black background behind github logo */}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                    }}>
                    <CssTextField
                        variant='outlined'
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
                    <CssButton variant='contained'>Search</CssButton>
                </div>
            </div>
        </>
    );
};

export default Search;
