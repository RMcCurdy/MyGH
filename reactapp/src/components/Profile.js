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
        window.open(`https://github.com/${search}?tab=${route}`, '_blank');
    };

    const backButtonClick = () => {
        setAnimation(false);
        setSearch('');
        setTimeout(() => {
            setSearchBool('');
        }, 1000);
    };

    const {
        search,
        setSearch,
        searchBool,
        setSearchBool,
        name,
        userName,
        avatar,
        bio,
        followers,
        following,
        numOfRepos,
        animation,
        setAnimation,
    } = useContext(AppContext);

    return (
        <>
            {animation === true ? (
                <>
                    <div className='profile-container profile-margin-top'>
                        <div
                            onClick={backButtonClick}
                            className='profile-last-fade-in profile-back-button link'>
                            <CssArrowBack />
                            <span className='profile-back-button-text'>
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
                                        `https://github.com/${search}`,
                                        '_blank',
                                    );
                                }}
                                className='profile-username link'>
                                {userName}
                            </div>
                        </div>
                        <div className='profile-second-fade-in'>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                <div className='profile-followers-container'>
                                    <div
                                        onClick={() => {
                                            openGitHubUserWindow(
                                                'repositories',
                                            );
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
                                {bio === null ? (
                                    <span>No bio.</span>
                                ) : (
                                    <>{bio}</>
                                )}
                            </div>
                        </div>
                        <div className='profile-third-fade-in'>
                            <div className='profile-chart-container'>
                                <PieChartLanguagesUsed />

                                {/* TODO add 2 more charts here */}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='transition-and-fade-out-profile-container'>
                        <div className='profile-container profile-margin-top'>
                            <div
                                onClick={backButtonClick}
                                className='profile-back-button link'>
                                <CssArrowBack />
                                <span className='profile-back-button-text'>
                                    Back
                                </span>
                            </div>
                            <div>
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
                                            `https://github.com/${search}`,
                                            '_blank',
                                        );
                                    }}
                                    className='profile-username link'>
                                    {userName}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                    <div className='profile-followers-container'>
                                        <div
                                            onClick={() => {
                                                openGitHubUserWindow(
                                                    'repositories',
                                                );
                                            }}
                                            className='profile-following-count-container'>
                                            <div>{numOfRepos}</div>
                                            <div className='profile-followers-captions link'>
                                                Repos
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => {
                                                openGitHubUserWindow(
                                                    'followers',
                                                );
                                            }}
                                            className='profile-following-count-container'>
                                            <div>{followers}</div>
                                            <div className='profile-followers-captions link'>
                                                Followers
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => {
                                                openGitHubUserWindow(
                                                    'following',
                                                );
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
                                    <div className='profile-bio'>
                                        {bio === null ? (
                                            <span>No bio.</span>
                                        ) : (
                                            <>{bio}</>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='profile-chart-container'>
                                    <PieChartLanguagesUsed />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Profile;
