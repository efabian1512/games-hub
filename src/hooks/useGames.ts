import FetchResponse from "../entities/FetchResponse";
import Game from "../entities/Game";
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import ms from 'ms';
import useGameQueryStore from '../store';




const apiClient = new APIClient<Game>('/games');

const useGames = () => {
    const { gameQuery } = useGameQueryStore();
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h')
        //initialData: games,

        //select: (games: Game[]) => 
    });
}



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