import React from 'react';
import { useHistory } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
    const history = useHistory();

    const handleNavbarClick = (route) => {
        history.push(route);
    };

    return (
        <>
            <div className='navbar-container'>
                <div
                    className='navbar-link'
                    onClick={() => {
                        handleNavbarClick('/GitHubProfileOverviewAPI/');
                    }}
                    style={{
                        marginLeft: '32px',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <GitHubIcon />
                    <span style={{ paddingLeft: '0.5rem' }}>MyGH</span>
                </div>
                <div
                    className='navbar-link'
                    onClick={() => {
                        handleNavbarClick('/GitHubProfileOverviewAPI/about');
                    }}
                    style={{ marginRight: '32px' }}>
                    About
                </div>
            </div>
        </>
    );
};

export default Navbar;
