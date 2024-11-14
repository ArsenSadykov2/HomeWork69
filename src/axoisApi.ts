import * as axios from 'axios';

const axiosApi = axios.default.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q='
});

export default axiosApi;