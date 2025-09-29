import { Box, Text } from "@chakra-ui/react";
import HeightFiller from "../HeightFiller";

function EmptyPage() {
    return (
        <Box>
            <HeightFiller />
            <Text
                color="white"
                textAlign="center"
                fontSize={{base: "xl", md: "4xl"}}
                w={{base: "80%", sm: "60%"}}
                bgColor='#303030'
                m="auto"
                h="fit-content"
                py={10}
                mt={10}
                borderRadius="xl"
            >Try searching to get started</Text>
        </Box>
    )
}

export default EmptyPage;