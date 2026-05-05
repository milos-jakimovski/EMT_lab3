import axios from 'axios';

const instance = axios.create({
    // Make sure this matches your Spring Boot server port (usually 8080)
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;