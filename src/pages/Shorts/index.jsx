import { Box, Text } from "@chakra-ui/react";
import { height } from "../../Utils";

function Shorts() {

    return (
        <Box
            w="100%"
            h={height}
            overflow="auto"
        >
            <Text
                mt={2}
                align="center"
                fontSize={{base: "md", lg: "xl"}}
            >Oops, Content not available</Text>

        </Box>
    )
}

export default Shorts;