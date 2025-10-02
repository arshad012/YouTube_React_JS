import { Box, Heading, Text, Button, VStack, Show } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import HeightFiller from "../../components/HeightFiller";

function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/", { replace: true });
    }

    return (
        <Box
            display="grid"
            // justifyContent="center"
            // alignItems="center"
            placeContent="center"
            h="100vh"
            w="100%"
            // px={6}
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

            <Show breakpoint='(max-width: 750px)'>
                <BottomBar />
            </Show>

            <HeightFiller />
        </Box>
    );
}

export default NotFound;