// Import the 'fetch' function from the 'isomorphic-fetch' library
import fetch from 'isomorphic-fetch';
import { fetchData } from './api';

// Define the endpoint of the API you want to connect to
const apiUrl = 'wss://wrongway-racer-api.spls.ae/';

// Function to fetch data from the API
const fetchData = async () => {
    try {
        // Send a GET request to the API
        const response = await fetch(`${apiUrl}/players`);
        // Parse the response to JSON
        const data = await response.json();
        // Use the data in your application
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

// Call the function to fetch data from the API
fetchData();
