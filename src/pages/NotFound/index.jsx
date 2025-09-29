import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/", {replace: true});
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH="100vh"
            bg="gray.900"
            color="white"
            px={6}
        >
            <VStack spacing={6} textAlign="center">
                <Heading fontSize={{ base: "6xl", md: "9xl" }} color="red.400">
                    404
                </Heading>
                <Text fontSize={{ base: "lg", md: "2xl" }}>
                    Oops! The page you’re looking for doesn’t exist.
                </Text>
                <Button
                    size="lg"
                    colorScheme="red"
                    _hover={{ bg: "red.500" }}
                    onClick={handleClick}
                >
                    Go Back Home
                </Button>
            </VStack>
        </Box>
    );
}

export default NotFound;