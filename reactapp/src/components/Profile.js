import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';

const Profile = () => {
    const {
        search,
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
                        <CssTextField variant='outlined' value={search} />
                    </div>
                    <div className='search-main-flex-container'>
                        <CssButton variant='contained'>Search</CssButton>
                    </div>
                </div>
            </div>
            <div className='profile-container'>
                <div className='profile-flex-column'>
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
                            style={{
                                color: 'white',
                                fontSize: '2rem',
                                fontFamily: 'Roboto-Regular',
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}>
                            {userName}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                marginTop: '1rem',
                                borderBottom: '1px solid #34414b',
                                paddingBottom: '0.75rem',
                            }}>
                            <div className='profile-following-count-container'>
                                <div>{numOfRepos}</div>
                                <div style={{ fontSize: '1rem' }}>Repos</div>
                            </div>
                            <div className='profile-following-count-container'>
                                <div>{followers}</div>
                                <div style={{ fontSize: '1rem' }}>
                                    Followers
                                </div>
                            </div>

                            <div className='profile-following-count-container'>
                                <div>{following}</div>
                                <div style={{ fontSize: '1rem' }}>
                                    Following
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-second-fade-in'>
                        <div
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                justifyContent: 'center',
                                marginTop: '1rem',
                                color: 'white',
                                fontSize: '1.25rem',
                                fontFamily: 'Roboto-Light',
                            }}>
                            <div style={{ maxWidth: '80%' }}>
                                {bio === null ? <>No bio.</> : <>{bio}</>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
