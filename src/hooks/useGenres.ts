import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import apiClient from "../services/api-client";
import { FetchResponse } from '../types/types';


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const useGenres = () => {
    const fetchGenres = () =>
        apiClient.get<FetchResponse<Genre>>('/genres')
            .then(res => res.data.results);

    return useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: genres
    });
}

//const useGenres = () => useData<Genre>('/genres');
//const useGenres = () => ({ data: genres, isLoading: false, error: null })
export default useGenres;