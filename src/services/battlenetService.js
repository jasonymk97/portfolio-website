import axiosService from '../lib/axiosService';

const BASE_URL = '/blizzard-api'; // Base URL for Battle.net API (local proxy setup assumed)
const accessToken = process.env.REACT_APP_BATTLENET_ACCESS_TOKEN;

const battlenetService = {
  // Function to fetch Hearthstone cards
  fetchHearthstoneCards: async (classType = 'mage', pageSize = 10, locale = 'en_US') => {
    const url = `${BASE_URL}/hearthstone/cards`;
    const params = {
        locale,
        class: classType,
        pageSize,
    };
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    }
    
    return axiosService.get(url, params, headers);
  },

  fetchHearthstoneCardById: async (cardId, locale = 'en_US') => {
    const url = `${BASE_URL}/hearthstone/cards/${cardId}`;
    const params = {
        locale,
    };
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    
    return axiosService.get(url, params, headers);
  },
  // Add other Battle.net API functions as needed
};

export default battlenetService;
