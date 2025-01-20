import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1b6413fc80384c1dad7e80966900252b'
    }
})

