import React, { useState, useEffect } from 'react';
import { TextField, Paper } from '@mui/material';
import Project from './Project';
import 'tailwindcss/tailwind.css';
import githubService from '../../services/githubService';
import { personalInfo } from '../../data/personalData';

const GitHubRepoCards = () => {
    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState('');
    const [isError, setIsError] = useState(false);

    // Fetch GitHub repositories
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resp = await githubService.getUserRepositories(personalInfo.githubName);
        if (resp.isError) {
            console.error('Error fetching Hearthstone cards:', resp.errorMessage);
            setIsError(true);
            return;
        }
        setRepos(resp.data);
        setIsError(false);
    }

    // Filter repositories based on search query
    const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()));

    if (Array.isArray(repos)) {
    }

    return (
        <div>
            {/* Display error message if there's an error */}
            {isError && (
                <div className="bg-red-200 text-red-700 p-4 rounded mb-4">
                    Network Error. Please try again later.
                </div>
            )}
            {/* Search Input */}
            <Paper className="mb-4 p-4">
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Search repositories"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-2"
                />
            </Paper>

            {/* Display repositories */}
            <div className="flex flex-wrap justify-start">
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo, index) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={index}>
                            <Project
                                title={repo.name}
                                description={repo.description || 'No description available'}
                                linkText="View Repo"
                                link={repo.html_url}
                            />
                        </div>
                    ))
                ) : (
                    // Display "No results found" message if no repositories match the search query
                    <div className="w-full text-center py-6">
                        No results found
                    </div>
                )}
            </div>
        </div>
    );
};

export default GitHubRepoCards;
