// Change from axios-browser (which wasn't installed) to regular axios
import axios from 'axios';

export const fetchProductsByCategory = async (category) => {
  try {
    // Make sure your API endpoint is correct
    const response = await axios.get(`/api/products/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} products:`, error);
    throw error;
  }
};
