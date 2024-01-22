import { Heading, Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
        <NavBar/>
        <Box padding={5}>
             <Heading as='h1'  fontSize='3xl'>Oops...</Heading>
        <Text>{isRouteErrorResponse(error) ? 'This page does not exist.' : 'Sorry, an unexpected error occurred.' }</Text>
        </Box>
        </>
        
    )
}

export default ErrorPage;