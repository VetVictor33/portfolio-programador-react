import axios from "axios";

const url = `https://sleepy-bull-frock.cyclic.app`;

export default axios.create({
    baseURL: url,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});