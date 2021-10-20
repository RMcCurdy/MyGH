import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const LargestRepos = () => {
    const { repoSizeNames, search } = useContext(AppContext);

    return (
        <>
            <div style={{ height: '100%' }} className='chart-pie-languages-used-container'>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'Roboto-Regular',
                        fontSize: '1.25rem',
                    }}>
                    Largest Repositories
                </div>
                {repoSizeNames.length > 0 ? (
                    <>
                        {repoSizeNames[0] !== undefined ? (
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        color: 'white',
                                        fontSize: '1.7rem',
                                        fontFamily: 'Roboto-Light',
                                        marginTop: '0.75rem',
                                    }}>
                                    <span style={{ fontFamily: 'Roboto-Medium', marginRight: '0.5rem' }}>#1</span>
                                    <span
                                        className='link'
                                        onClick={() => {
                                            window.open(`https://github.com/${search}/${repoSizeNames[0]}`, '_blank');
                                        }}>
                                        {repoSizeNames[0]}
                                    </span>
                                </div>
                                {repoSizeNames[1] !== undefined ? (
                                    <>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                color: 'white',
                                                fontSize: '1.55rem',
                                                fontFamily: 'Roboto-Light',
                                                marginTop: '0.75rem',
                                            }}>
                                            <span style={{ fontFamily: 'Roboto-Medium', marginRight: '0.65rem' }}>#2</span>
                                            <span
                                                className='link'
                                                onClick={() => {
                                                    window.open(`https://github.com/${search}/${repoSizeNames[1]}`, '_blank');
                                                }}>
                                                {repoSizeNames[1]}
                                            </span>
                                        </div>
                                        {repoSizeNames[2] !== undefined ? (
                                            <>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'flex-start',
                                                        color: 'white',
                                                        fontSize: '1.4rem',
                                                        fontFamily: 'Roboto-Light',
                                                        marginTop: '0.75rem',
                                                    }}>
                                                    <span style={{ fontFamily: 'Roboto-Medium', marginRight: '0.8rem' }}>#3</span>
                                                    <span
                                                        className='link'
                                                        onClick={() => {
                                                            window.open(`https://github.com/${search}/${repoSizeNames[2]}`, '_blank');
                                                        }}>
                                                        {repoSizeNames[2]}
                                                    </span>
                                                </div>
                                                {repoSizeNames[3] !== undefined ? (
                                                    <>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'flex-start',
                                                                color: 'white',
                                                                fontSize: '1.25rem',
                                                                fontFamily: 'Roboto-Light',
                                                                marginTop: '0.75rem',
                                                            }}>
                                                            <span
                                                                style={{
                                                                    fontFamily: 'Roboto-Medium',
                                                                    marginRight: '0.95rem',
                                                                }}>
                                                                #4
                                                            </span>
                                                            <span
                                                                className='link'
                                                                onClick={() => {
                                                                    window.open(`https://github.com/${search}/${repoSizeNames[3]}`, '_blank');
                                                                }}>
                                                                {repoSizeNames[3]}
                                                            </span>
                                                        </div>
                                                        {repoSizeNames[4] !== undefined ? (
                                                            <>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-start',
                                                                        color: 'white',
                                                                        fontSize: '1.1rem',
                                                                        fontFamily: 'Roboto-Light',
                                                                        marginTop: '0.75rem',
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            fontFamily: 'Roboto-Medium',
                                                                            marginRight: '1.1rem',
                                                                        }}>
                                                                        #5
                                                                    </span>
                                                                    <span
                                                                        className='link'
                                                                        onClick={() => {
                                                                            window.open(`https://github.com/${search}/${repoSizeNames[4]}`, '_blank');
                                                                        }}>
                                                                        {repoSizeNames[4]}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                            fontFamily: 'Roboto-Light',
                            fontSize: '1.25rem',
                            padding: '8vw 0',
                        }}>
                        No Data.
                    </div>
                )}
            </div>
        </>
    );
};

export default LargestRepos;
