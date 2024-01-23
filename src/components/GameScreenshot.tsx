import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}
const GameScreenshot = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId);

    if(error) throw error;
    if(isLoading) return null;

    
    return (
        <SimpleGrid columns={{base: 1, md:2 }} spacing={2}>
           {data?.results.map(image => <Image key={image.id} src={image.image}/> )}
        </SimpleGrid>
         
    )
   
}

export default GameScreenshot;