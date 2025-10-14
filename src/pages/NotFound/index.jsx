import { Box, Heading, Text, Button, VStack, Show } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import HeightFiller from "../../components/HeightFiller";

function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/", { replace: true });
    }

    const windowWidth = window.innerWidth;
    let height;
    if(windowWidth < 600) {
        height = "calc(100vh - 110px)";
    } else {
        height = "calc(100vh - 60px)";
    }

    return (
        <Box
            display="grid"
            placeContent="center"
            h={height}
            w="100%"
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