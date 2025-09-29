import { Box, Text } from "@chakra-ui/react";

function Loading() {
    return (
        <Box 
            w="50%"
            m="auto"
            mt={10}
            borderRadius="xl"
            bgColor='rgba(15, 15, 15, 0.5)'
            backdropFilter='blur(20px)'
            position="absolute"
            top={20}
            left="50%"
            transform={"translate(-50%, -50%)"}
            color="white"
        >
            <Text fontSize="5xl" textAlign="center">Loading...</Text>
        </Box>
    )
}

export default Loading;