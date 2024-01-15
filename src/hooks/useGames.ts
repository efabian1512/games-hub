import { FetchResponse, Game, Platform } from '../types/types';
import { useQuery } from '@tanstack/react-query';
import apiClient from "../services/api-client";
import { GameQuery } from '../App';





const useGames = (gameQuery: GameQuery) => useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    })
        .then(res => res.data.results),
    //staleTime: 24 * 60 * 60 * 1000,
    //initialData: games,

    //select: (games: Game[]) => 
});
// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
//     params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//     }
// },
//     [gameQuery]);


export default useGames;