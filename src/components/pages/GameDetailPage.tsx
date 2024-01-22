import { useParams } from "react-router-dom";
import useGameDetail from '../../hooks/useGameDetail';
import { Heading, Text, Spinner } from '@chakra-ui/react';

const GameDetailPage = () => {
    const params = useParams();
    const {data, isLoading, error} = useGameDetail(params.slug!);
    if (isLoading) return <Spinner/>;

    if(error || !data) throw error;
    return (
        <>
            <Heading as='h1'>{data.name}</Heading>
            <Text>{data.description_raw}</Text>
        </>
    )
}

export default GameDetailPage;