import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import useGameDetail from '../../hooks/useGameDetail';
import useGameTrailer from '../../hooks/useGameTrailers';
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameTrailer from '../GameTrailer';

const GameDetailPage = () => {
    const params = useParams();
    const {data, isLoading, error} = useGameDetail(params.slug!);
    if (isLoading) return <Spinner/>;

    if(error || !data) throw error;
    return (
        <>
            <Heading as='h1'>{data.name}</Heading>
            <ExpandableText>{data.description_raw}</ExpandableText>
            <GameAttributes game={data}/>
            <GameTrailer gameId={data.id}/>
            {/* <Grid marginY={5} templateColumns='repeat(2, 1fr)'>
                <GridItem marginBottom={10}><GameAttribute data={{title: 'Platforms', content: data.parent_platforms.map(p=> p.platform.name)}}/></GridItem>
                <GridItem marginBottom={10}><GameAttribute data={{title: 'Metascore', content: data.metacritic}}/></GridItem>
                <GridItem marginBottom={10}><GameAttribute data={{title: 'Genres', content: data.genres.map(g => g.name)}}/></GridItem>
                <GridItem marginBottom={10}><GameAttribute data={{title: 'Publishers', content: data.publishers.map(pub => pub.name)}}/></GridItem>
            </Grid> */}
        </>
    )
}

export default GameDetailPage;