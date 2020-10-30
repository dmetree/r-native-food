import axios from 'axios';

// GET https://api.yelp.com/v3/businesses/search
// GET https://api.yelp.com/v3/businesses/{id}

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QL-xUnA5CbTgEgVSFw-nZoUaXOMGS7JgOtvOiAGJ745pjN4dihke9o-ihbpsgn_rBD5wZv12ymCFp-c4_dvOZMDbhycbw-KW6OlPw_eKLEwxSZb0dXvcI7A3oUKZX3Yx'
    }
})