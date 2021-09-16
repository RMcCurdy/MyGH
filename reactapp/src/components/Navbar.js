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
                    className='link'
                    onClick={() => {
                        handleNavbarClick('/MyGH/');
                    }}
                    style={{
                        marginLeft: '2vw',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <GitHubIcon />
                    <span style={{ paddingLeft: '0.5rem' }}>MyGH</span>
                </div>
                <div
                    className='link'
                    onClick={() => {
                        handleNavbarClick('/MyGH/about');
                    }}
                    style={{ marginRight: '2vw' }}>
                    About
                </div>
            </div>
        </>
    );
};

export default Navbar;
