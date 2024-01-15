import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types/types";


const axiosIntance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e792b9425eb34eb1b2dcfffea8988524'
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosIntance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;


