import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient';
import Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games');
const useGameDetail = (slug: string) => useQuery({
    queryKey: ['gameDetail', slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms('24h')
});


export default useGameDetail;