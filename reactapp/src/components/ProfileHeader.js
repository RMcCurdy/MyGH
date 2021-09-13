import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const ProfileHeader = () => {
    const { userName, avatar, bio, followers, following, numOfRepos } =
        useContext(AppContext);
    return (
        <>
            <div>
                <img src={avatar} alt='profile-pic'></img>
            </div>
            <div>This is the userName {userName}</div>
            <div>This is the bio {bio}</div>
            <div>This is the followers {followers}</div>
            <div>This is the following {following}</div>
            <div>This is the numOfRepos {numOfRepos}</div>
        </>
    );
};

export default ProfileHeader;
