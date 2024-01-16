import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Platform } from '../types/types';
import ms from 'ms';


//const usePlaforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlaforms = () => ({ data: platforms, isLoading: false, error: null });
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
    queryKey: ['plaforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
});
export default usePlatforms;
