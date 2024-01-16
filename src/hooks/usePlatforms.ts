import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Platform } from '../types/types';


//const usePlaforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlaforms = () => ({ data: platforms, isLoading: false, error: null });
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
    queryKey: ['plaforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { results: platforms, count: platforms.length }
});
export default usePlatforms;
