import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import Platform from "../entities/Platform";
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
    queryKey: ['plaforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
});
export default usePlatforms;
