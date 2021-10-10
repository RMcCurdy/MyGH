import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            color: 'white',
            backgroundColor: '#191F24',
            fontFamily: 'Roboto-Regular',
            '& fieldset': {
                border: '1px solid #495b69',
            },
            '&:hover fieldset': {
                border: '2px solid #495b69',
            },
            '&.Mui-focused fieldset': {
                border: '3px solid #495b69',
            },
        },
    },
})(TextField);

const CssButton = withStyles({
    root: {
        textTransform: 'none',
        fontFamily: 'Roboto-Regular',
        backgroundColor: 'white',
        color: '#191F24',
    },
})(Button);

const Search = () => {
    const {
        search,
        setSearch,
        searchBool,
        setSearchBool,
        setName,
        setUserName,
        setAvatar,
        setBio,
        setFollowers,
        setFollowing,
        setNumOfRepos,
        setRepos,
        repos,
        setLanguageTotals,
        animation,
        setAnimation,
        setRepoSizeNames,
    } = useContext(AppContext);

    const [apiError, setApiError] = useState(false);

    const setData = ({ name, login, avatar_url, bio, followers, following, public_repos }) => {
        setName(name);
        setUserName(login);
        setAvatar(avatar_url);
        setBio(bio);
        setFollowers(followers);
        setFollowing(following);
        setNumOfRepos(public_repos);
    };

    const setLanguagesUsed = async () => {
        const res = await fetch(`https://api.github.com/users/${search}/repos`);
        const repoData = await res.json();
        setRepos(repoData);
        const langVals = await filterLanguages(repoData);
        setLanguageTotals(langVals);
        console.log(langVals);
    };

    const setRepoSizes = async () => {
        const res = await fetch(`https://api.github.com/users/${search}/repos`);
        const sizeData = await res.json();
        let repoSize = [];
        let sortedRepoNamesForSize = [];
        for (let i = 0; i < sizeData.length; i++) {
            if (i === 0) {
                repoSize.push(sizeData[i].size);
                sortedRepoNamesForSize.push(sizeData[i].name);
            } else {
                let repoSizeLength = repoSize.length;
                for (let j = 0; j < repoSizeLength; j++) {
                    if (sizeData[i].size > repoSize[j]) {
                        repoSize.splice(j, 0, sizeData[i].size);
                        sortedRepoNamesForSize.splice(j, 0, sizeData[i].name);
                        break;
                    }
                }
                if (repoSize[repoSizeLength - 1] > sizeData[i].size) {
                    repoSize.push(sizeData[i].size);
                    sortedRepoNamesForSize.push(sizeData[i].name);
                }
            }
        }
        setRepoSizeNames(sortedRepoNamesForSize);
    };

    const filterLanguages = async (repoData) => {
        let totalLanguageValues = {};
        for (let i = 0; i < repoData.length; i++) {
            const currentRepoName = repoData[i].name;
            const resLang = await fetch(`https://api.github.com/repos/${search}/${currentRepoName}/languages`);
            const langData = await resLang.json();
            for (let key in langData) {
                if (totalLanguageValues.hasOwnProperty(key)) {
                    totalLanguageValues[key] = totalLanguageValues[key] + langData[key];
                } else {
                    totalLanguageValues[key] = langData[key];
                }
            }
        }
        return totalLanguageValues;
    };

    const handleSubmit = async () => {
        const res = await fetch(`https://api.github.com/users/${search}`);
        const data = await res.json();
        if (data.message !== undefined) {
            if (data.message === 'Not Found') {
                setSearch('');
                setSearchBool(false);
            } else if (data.message.startsWith('API rate limit exceeded')) {
                setSearch('');
                setApiError(true);
            }
        } else {
            await setAnimation(true);
            await setData(data);
            await setLanguagesUsed();
            await setRepoSizes();
            setTimeout(() => {
                setSearchBool(true);
            }, 1000);
        }
    };

    return (
        <>
            {/* The animation boolean is used for translating the user input section */}
            {animation === true ? (
                <div style={{ marginTop: '161px' }} className='transition-and-fade-out-container'>
                    <div
                        // Height of Navbar 65px + 32px

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

                        <div className='search-main-helper-text'>Enter a GitHub Username</div>

                        <div className='search-main-flex-container'>
                            <CssTextField variant='outlined' value={search} />
                        </div>
                        <div className='search-main-flex-container'>
                            <CssButton variant='contained'>Search</CssButton>
                        </div>
                    </div>
                </div>
            ) : (
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

                        {/* Search bar header depending on state */}
                        {searchBool === false ? <div className='search-main-error-text'>Invalid Username, Please Try Again</div> : null}

                        {apiError === true ? <div className='search-main-error-text'>Too Many Requests, Please Try Again Later</div> : null}

                        {apiError !== true && searchBool !== false ? <div className='search-main-helper-text'>Enter a GitHub Username</div> : null}

                        {/* Search Field for Username input */}
                        <div className='search-main-flex-container'>
                            <CssTextField
                                variant='outlined'
                                onKeyPress={(ev) => {
                                    if (ev.key === 'Enter') {
                                        handleSubmit();
                                    }
                                }}
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>
                        {/* Button to click for searching username */}
                        <div className='search-main-flex-container'>
                            <CssButton onClick={handleSubmit} variant='contained'>
                                Search
                            </CssButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
