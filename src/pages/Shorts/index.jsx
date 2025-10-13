import { Box, Text } from "@chakra-ui/react";

function Shorts() {
    return (
        <Box
            w="100%"
            h="calc(100vh - 110px)"
            overflow="auto"
        >
            <Text
                mt={2}
                align="center"
            >Oops, Content not available</Text>

        </Box>
    )
}

export default Shorts;