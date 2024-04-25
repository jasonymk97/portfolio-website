import axios from 'axios';

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
  baseURL: '/', // Default base URL, can be changed as needed
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
  timeout: 10000, // Default timeout of 10 seconds, adjust as needed
});

// Function to handle errors
const handleErrors = (error) => {
  // You can customize error handling here
  console.error('API request failed:', error);
  // Optionally, rethrow the error if you want to handle it at a higher level
  throw error;
};

// Axios service object to encapsulate common API functions
const axiosService = {
  // Function to make a GET request
  async get(url, params = {}, headers = {}) {
    try {
      const response = await axiosInstance.get(url, {
        params,
        headers: {
          ...headers,
          ...axiosInstance.defaults.headers, // Combine provided headers with default headers
        },
      });
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  // Function to make a POST request
  async post(url, data = {}, headers = {}) {
    try {
      const response = await axiosInstance.post(url, data, {
        headers: {
          ...headers,
          ...axiosInstance.defaults.headers, // Combine provided headers with default headers
        },
      });
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  // Function to make a PUT request
  async put(url, data = {}, headers = {}) {
    try {
      const response = await axiosInstance.put(url, data, {
        headers: {
          ...headers,
          ...axiosInstance.defaults.headers, // Combine provided headers with default headers
        },
      });
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  // Function to make a DELETE request
  async delete(url, data = {}, headers = {}) {
    try {
      const response = await axiosInstance.delete(url, {
        data,
        headers: {
          ...headers,
          ...axiosInstance.defaults.headers, // Combine provided headers with default headers
        },
      });
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  // Function to make a PATCH request
  async patch(url, data = {}, headers = {}) {
    try {
      const response = await axiosInstance.patch(url, data, {
        headers: {
          ...headers,
          ...axiosInstance.defaults.headers, // Combine provided headers with default headers
        },
      });
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },
};

export default axiosService;
