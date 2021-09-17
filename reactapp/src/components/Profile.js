import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import PieChartLanguagesUsed from './pieChart/PieChartLanguagesUsed';

const Profile = () => {
    const history = useHistory();

    const openGitHubUserWindow = (route) => {
        window.open(`https://github.com/RMcCurdy?tab=${route}`, '_blank');
    };

    const {
        search,
        searchBool,
        setSearchBool,
        name,
        userName,
        avatar,
        bio,
        followers,
        following,
        numOfRepos,
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
            <div
                style={{ marginTop: '113px' }}
                className='transition-and-fade-container'>
                <div
                    // Height of Navbar 65px + 32px

                    className='search-main-container'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        {/* <div className='github-logo-search-main-background' /> */}
                        <GitHubIcon className='github-logo-search-main' />
                        {/* To be used to display a black background behind github logo */}
                    </div>

                    <div className='search-main-helper-text'>
                        Enter a GitHub Username
                    </div>

                    <div className='search-main-flex-container'>
                        <CssTextField variant='outlined' value={search} />
                    </div>
                    <div className='search-main-flex-container'>
                        <CssButton variant='contained'>Search</CssButton>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '48px' }} className='profile-container'>
                <div className='profile-first-fade-in'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <img
                            className='profile-avatar'
                            src={avatar}
                            alt='avatar'></img>
                    </div>
                    <div
                        onClick={() => {
                            window.open(
                                'https://github.com/RMcCurdy',
                                '_blank',
                            );
                        }}
                        className='profile-username link'>
                        {userName}
                    </div>
                </div>
                <div className='profile-second-fade-in'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='profile-followers-container'>
                            <div
                                onClick={() => {
                                    openGitHubUserWindow('repositories');
                                }}
                                className='profile-following-count-container'>
                                <div>{numOfRepos}</div>
                                <div className='profile-followers-captions link'>
                                    Repos
                                </div>
                            </div>

                            <div
                                onClick={() => {
                                    openGitHubUserWindow('followers');
                                }}
                                className='profile-following-count-container'>
                                <div>{followers}</div>
                                <div className='profile-followers-captions link'>
                                    Followers
                                </div>
                            </div>

                            <div
                                onClick={() => {
                                    openGitHubUserWindow('following');
                                }}
                                className='profile-following-count-container'>
                                <div>{following}</div>
                                <div className='profile-followers-captions link'>
                                    Following
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-bio'>
                        <div style={{ maxWidth: '90vw' }}>
                            {bio === null ? <span>No bio.</span> : <>{bio}</>}
                        </div>
                    </div>
                </div>
                <div className='profile-third-fade-in'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '80vw',
                            marginTop: '1.5rem',
                        }}>
                        <PieChartLanguagesUsed />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
