import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const PageNotFound = () => {
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

                <div className='page-not-found-text'>Page Not Found</div>
            </div>
        </>
    );
};

export default PageNotFound;
