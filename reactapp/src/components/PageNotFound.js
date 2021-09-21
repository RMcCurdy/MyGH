import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const PageNotFound = () => {
    return (
        <>
            <div className='transition-and-fade-in-container'>
                <div
                    // Height of Navbar 65px + 48px
                    style={{ marginTop: '161px' }}
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
                        Page Not Found
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
