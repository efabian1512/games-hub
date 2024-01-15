import { FetchResponse, Game, Platform } from '../types/types';
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient from '../services/apiClient';



const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }),

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