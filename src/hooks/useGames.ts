import { FetchResponse, Game, Platform } from '../types/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient from '../services/apiClient';




const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
        }
    }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    }

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