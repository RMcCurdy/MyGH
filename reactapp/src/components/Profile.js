import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';

const Profile = () => {

    const {
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

    return (
        <>
        <div className='transition-and-fade-container'>

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
        
        <div className='search-main-helper-text'>
            Enter a GitHub Username
        </div>

        <div className='search-main-flex-container'>
            <CssTextField
                variant='outlined'
                value={search}
                />
        </div>
        <div className='search-main-flex-container'>
            <CssButton variant='contained'>
                Search
            </CssButton>
        </div>
                </div>
    </div></>
    )
}

export default Profile
