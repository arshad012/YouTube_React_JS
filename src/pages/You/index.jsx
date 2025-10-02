import { Box, Show, Text, useColorModeValue } from "@chakra-ui/react";
import HeightFiller from "../../components/HeightFiller";
import BottomBar from "../../components/BottomBar";

function You() {
    return (
        <Box
            w="100%"
            maxH='100%'
            overflowY="scroll"
        >
            <HeightFiller />

            <Text
                fontSize="xl"
                mt={10}
                align="center"
            >Your Details not available</Text>

            <Show breakpoint='(max-width: 750px)'>
                <BottomBar />
            </Show>

            <HeightFiller />
        </Box>
    )
}

export default You;