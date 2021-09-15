import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
        fontFamily: 'Roboto-Regular',
        backgroundColor: 'white',
        color: '#191F24',
    },
})(Button);

const Search = () => {
    const history = useHistory();

    const {
        setPath,
        search,
        setSearch,
        searchBool,
        setSearchBool,
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
                if (data.message === 'Not Found') {
                    setSearch('');
                    setSearchBool(false);
                } else {
                    setSearchBool(true);
                    setData(data);
                    history.push(`/GitHubProfileOverviewAPI/${search}/`);
                }
            });
    };

    return (
        <>
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
                {searchBool === false ? (
                    <div className='search-main-error-text'>
                        Invalid Username, Please Try Again
                    </div>
                ) : (
                    <div className='search-main-helper-text'>
                        Enter a GitHub Username
                    </div>
                )}

                <div className='search-main-flex-container'>
                    <CssTextField
                        variant='outlined'
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
                <div className='search-main-flex-container'>
                    <CssButton onClick={handleSubmit} variant='contained'>
                        Search
                    </CssButton>
                </div>
            </div>
        </>
    );
};

export default Search;
