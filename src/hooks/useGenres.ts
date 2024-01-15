import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { results: genres, count: genres.length }
});


//const useGenres = () => useData<Genre>('/genres');
//const useGenres = () => ({ data: genres, isLoading: false, error: null })
export default useGenres;