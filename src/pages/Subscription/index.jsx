import { Box, Text } from "@chakra-ui/react";
import { height } from "../../Utils";

function Subscription() {
    return (
        <Box
            w="100%"
            h={height}
            overflow="auto"
        >
            <Text
                mt={2}
                align="center"
            >Subscription details not available</Text>
        </Box>
    )
}

export default Subscription;