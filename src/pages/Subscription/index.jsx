import { Box, Show, Text, useColorModeValue } from "@chakra-ui/react";
import BottomBar from "../../components/BottomBar";
import HeightFiller from "../../components/HeightFiller";

function Subscription() {
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
            >Subscription details not available</Text>

            <Show breakpoint='(max-width: 750px)'>
                <BottomBar />
            </Show>

            <HeightFiller />
        </Box>
    )
}

export default Subscription;