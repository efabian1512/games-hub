import useGameTrailer from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}
const GameTrailer = ({gameId}: Props) => {
const {data, error, isLoading} = useGameTrailer(gameId);

if(error) throw error;

if(isLoading) return null;
const first = data?.results[0];

return first ? <video 
   poster={first.preview} 
   src={first.data[480]}
   controls
   /> : null;
}

export default GameTrailer;