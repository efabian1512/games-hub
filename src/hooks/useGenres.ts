import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import ms from 'ms';



export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres')
const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres
    });


//const useGenres = () => useData<Genre>('/genres');
//const useGenres = () => ({ data: genres, isLoading: false, error: null })
export default useGenres;