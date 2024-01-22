import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import ms from 'ms';
import { Genre } from '../entities/Genre';



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