import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xqs4Oxtv9YVJlhdxAwWuQeYJ2fy3K2N4oiI4_R1vvOg'
    }
});