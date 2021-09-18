import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import PieChartLanguagesUsed from './pieChart/PieChartLanguagesUsed';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

const CssArrowBack = withStyles({
    root: {
        color: 'white',
    },
})(ArrowBackIcon);

const Profile = () => {
    const openGitHubUserWindow = (route) => {
        window.open(`https://github.com/RMcCurdy?tab=${route}`, '_blank');
    };

    const backButtonClick = () => {};

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

    return (
        <>
            <div style={{ marginTop: '48px' }} className='profile-container'>
                <div
                    onClick={backButtonClick}
                    className='profile-last-fade-in profile-back-button link'>
                    <CssArrowBack />
                    <span
                        style={{
                            marginLeft: '0.5rem',
                            color: 'white',
                            fontSize: '1.25rem',
                            fontFamily: 'Roboto-Light',
                        }}>
                        Back
                    </span>
                </div>
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
