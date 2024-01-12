import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e792b9425eb34eb1b2dcfffea8988524'
    }
});
