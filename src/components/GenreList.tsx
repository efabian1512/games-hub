import useGenres from "../hooks/useGenres";
import { Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { HStack, Button } from '@chakra-ui/react';
import getCroppedImageUrl from "../services/image.url";
import React from "react";
import useGameQueryStore from "../store";

const GenreList = () => {

    const { data, isLoading, error } = useGenres();
    const {setGenreId, selectedGenreId} = useGameQueryStore(s => ({selectedGenreId: s.gameQuery.genreId, setGenreId: s.setGenreId}));
    
    if (error) return null;
    if (isLoading) return <Spinner/>;
    return (
        <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {data?.results.map(genre => <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit='cover'/>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal' } onClick={() => setGenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
                </ListItem>)}
        </List>
        </>
        
    )
}

export default GenreList;