import useData, { FetchResponse } from './useData';
import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Platform } from '../types/plaform';


//const usePlaforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlaforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () => useQuery({
    queryKey: ['plaforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms

});
export default usePlatforms;
