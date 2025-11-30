import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const scrapeProfile = async (url) => {
    try {
        const response = await axios.post(`${API_URL}/scrape`, { url });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};
