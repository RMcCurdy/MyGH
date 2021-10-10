import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

const LargestRepos = () => {
    const { repoSizeNames } = useContext(AppContext);

    return (
        <>
            <div className='chart-pie-languages-used-container'>
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
                        {repoSizeNames[0] !== null ? (
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
                                    {repoSizeNames[0]}
                                </div>
                                {repoSizeNames[1] !== null ? (
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
                                            <span style={{ fontFamily: 'Roboto-Medium', marginRight: '0.5rem' }}>#2</span>
                                            {repoSizeNames[1]}
                                        </div>
                                        {repoSizeNames[2] !== null ? (
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
                                                    <span style={{ fontFamily: 'Roboto-Medium', marginRight: '0.5rem' }}>#3</span>
                                                    {repoSizeNames[2]}
                                                </div>
                                                {repoSizeNames[3] !== null ? (
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
                                                                    marginRight: '0.5rem',
                                                                }}>
                                                                #4
                                                            </span>
                                                            {repoSizeNames[3]}
                                                        </div>
                                                        {repoSizeNames[4] !== null ? (
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
                                                                            marginRight: '0.5rem',
                                                                        }}>
                                                                        #5
                                                                    </span>
                                                                    {repoSizeNames[4]}
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
                            padding: '11vw 0',
                        }}>
                        No Data.
                    </div>
                )}
            </div>
        </>
    );
};

export default LargestRepos;
