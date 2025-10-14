import { Text, Box } from "@chakra-ui/react";
import { height } from "../../Utils";

function WatchLater() {
    return (
        <Box h={height}>
            <Text
                mt={2}
                align="center"
                fontSize={{base: "md", lg: "xl"}}
            >This page is under maintanance</Text>
        </Box>
    )
}

export default WatchLater;