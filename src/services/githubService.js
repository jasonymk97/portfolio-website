import axiosService from '../lib/axiosService';

const BASE_URL = '/github-api'; // Base URL for GitHub API

const accessToken = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const githubService = {
  // Function to fetch user's repositories
  getUserRepositories: async (username) => {
    const url = `${BASE_URL}/users/${username}/repos`;
    const headers = {
      Authorization: `token ${accessToken}`, // Include access token in headers
    };
    return axiosService.get(url, {}, headers);
  },
};

export default githubService;
