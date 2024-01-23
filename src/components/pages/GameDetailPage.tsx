import { Heading, Grid, GridItem, Spinner, Box, SimpleGrid} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import useGameDetail from '../../hooks/useGameDetail';
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameTrailer from '../GameTrailer';
import GameScreenshot from '../GameScreenshot';

const GameDetailPage = () => {
    const params = useParams();
    const {data, isLoading, error} = useGameDetail(params.slug!);
    if (isLoading) return <Spinner/>;

    if(error || !data) throw error;
    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
            <Box>
                <Heading as='h1'>{data.name}</Heading>
                <ExpandableText>{data.description_raw}</ExpandableText>
                <Box marginTop={10}>
                    <GameAttributes game={data}/>
                </Box>
            </Box>
           
            <Box>
                <GameTrailer gameId={data.id}/>
                <Box marginTop={2}>
                    <GameScreenshot gameId={data.id}/>
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default GameDetailPage;