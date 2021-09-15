import React from 'react';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: '0%',
                left: '0%',
                width: '100%',
                height: '64px',
                color: 'white',
                fontFamily: 'Roboto-Medium',
                backgroundColor: '#151a1e',
                borderBottom: '1px solid #34414b',
            }}>
            <div style={{ marginLeft: '32px', fontSize: '1.5rem' }}>MyGH</div>
            <div style={{ marginRight: '32px' }}>About</div>
        </div>
    );
};

export default Navbar;
