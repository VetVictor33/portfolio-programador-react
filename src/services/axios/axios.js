import axios from "axios";

export default axios.create({
    baseURL: 'https://message-victor.onrender.com',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
});