import { Box, Text, useColorModeValue } from "@chakra-ui/react";

function EmptyPage() {
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const textColor = useColorModeValue("black", "white");
    
    return (
        <Box
            w="100%"
            minH="100vh"
        >
            <Text
                color={textColor}
                textAlign="center"
                fontSize={{base: "xl", md: "4xl"}}
                w={{base: "80%", sm: "60%"}}
                bgColor={bgColor}
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