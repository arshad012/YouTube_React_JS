import { Box } from '@chakra-ui/react'

function HeightFiller() {
    return (
        <Box w='100%' h='60px'></Box>
    )
}

export default HeightFiller

/*
This component fills a height equal to navbar height because each component's content is starting from top and hiding behind navbar.
*/