import { Button, SimpleGrid, Text, Box, Spinner } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from 'react-infinite-scroll-component';



const GameGrid = () => {
    
   const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
   const skeletons = [1,2,3,4,5,6];

    if(error) return <Text>{error.message}</Text>;
    const fetchedGamesCount = data?.pages.reduce((total, page)=> total + page.results.length, 0) || 0;
    return (
        // <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 4}} spacing={6} padding="10px">
        //     {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
        //     {data?.pages.map((page, index) => 
        //     <InfiniteScroll 
        //     key={index} 
        //     dataLength={page.results.length} 
        //     next={() => fetchNextPage()} 
        //     hasMore={hasNextPage ? true : false}
        //     loader={''}
        //     >
        // //     {page.results.map(post => <GameCardContainer key={post.id} ><GameCard game={post}/></GameCardContainer>)}
        // </InfiniteScroll>)}
        // </SimpleGrid>
            
            <InfiniteScroll 
            dataLength={fetchedGamesCount} 
            next={() => fetchNextPage()} 
            hasMore={!!hasNextPage}
            loader={<Spinner/>
            }
            >
             <SimpleGrid  padding="10px" columns={{sm:1, md:2, lg:3, xl: 4}} spacing={6}>
            {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
            {data?.pages.map((page, index) => <React.Fragment key={index}>{page.results.map(post => <GameCardContainer key={post.id} ><GameCard game={post}/></GameCardContainer> )}</React.Fragment>)}
            
        </SimpleGrid>
        </InfiniteScroll>  
        //{/* {hasNextPage && <Button marginBottom={5} marginTop="10px" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>{isFetchingNextPage ? '...Loading' : 'Load More'}</Button>} */}
    )
}

export default GameGrid;