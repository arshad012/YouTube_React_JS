import { Box, VStack, Image, HStack, Text, Flex, Hide, Show, useColorModeValue } from "@chakra-ui/react";
import { getTimeTaken } from "../../Utils";
import { CheckCircleIcon } from "@chakra-ui/icons";

function WatchPageVideoCard({ item, onClick }) {
    const textColor = useColorModeValue("#6c6c6c", "whiteAlpha.700");

    let title = item.snippet.title;
    if (window.innerWidth <= 1030) {
        title = title.slice(0, 50);
        title += "...";
    }

    if(item.id.channelId) {
        return <></> // it means this item is a channel and not a video so we will not append this item.
    }

    return (
        <Box
            w="full"
        >
            <Flex direction={{ base: "column", sm: "row" }} gap={{base: 2, sm: 5}}>
                <Box w={{base: "full", sm: "40%"}}>
                    <Image
                        src={item.snippet.thumbnails.high.url}
                        alt="Thumbnail not available"
                        w="full"
                        borderRadius="xl"
                        onClick={() => onClick(item)}
                        _hover={{ cursor: "pointer" }}
                    />
                </Box>

                <Hide below="sm">
                    <Box
                        flex={1}
                    >
                        <VStack justify="start" align="start" px={{ base: 5, sm: 0 }}>

                            <Text
                                fontSize={{ base: "xs", sm: "sm", lg: "lg" }}
                                fontWeight="bold"
                                onClick={() => onClick(item)}
                                _hover={{ cursor: "pointer" }}
                            >{item.snippet.title}</Text>

                            <Text
                                color={textColor}
                                fontSize={{ base: "xs", sm: "sm" }}
                            >{getTimeTaken(item.snippet.publishTime)}</Text>

                            <Flex align="center" gap={3}>
                                <Box h="40px" w="40px" mt={1}>
                                    <Image boxSize="full" borderRadius="full" src={item.snippet.thumbnails.default.url} alt="" />
                                </Box>
                                <Text color={textColor} fontSize={{ base: "xs", sm: "sm" }}>{item.snippet.channelTitle} <CheckCircleIcon color="whiteAlpha.700" boxSize={3} ml={1} /></Text>
                            </Flex>

                            <Text color={textColor} fontSize={{ base: "xs", sm: "sm" }}>{item.snippet.description}</Text>
                        </VStack>
                    </Box>
                </Hide>

                <Show below="sm">
                    <HStack justify="start" align="start" w="full" px={{ base: 5, sm: 0 }}>
                        <Box h="40px" w="40px" mt={1}>
                            <Image boxSize="full" borderRadius="full" src={item.snippet.thumbnails.default.url} alt="" />
                        </Box>
                        <VStack flex={1} align="start" gap={0}>
                            <Text
                                onClick={() => onClick(item)}
                            >{title}</Text>
                            <Text color="whiteAlpha.700" fontSize={{ base: "xs", sm: "sm" }}>{item.snippet.channelTitle}</Text>
                            <Text color="whiteAlpha.700" fontSize={{ base: "xs", sm: "sm" }}>{getTimeTaken(item.snippet.publishTime)}</Text>
                        </VStack>
                    </HStack>
                </Show>
            </Flex>
        </Box>
    )
}

export default WatchPageVideoCard;


const smapleData = {
    "kind": "youtube#searchResult",
    "etag": "CTHtQkL2u__0X9orme3mpqcO8d8",
    "id": {
        "kind": "youtube#video",
        "videoId": "LKNHVDPKy7g"
    },
    "snippet": {
        "publishedAt": "2014-11-05T05:46:49Z",
        "channelId": "UC0PKLLmL8pIJLjOI1gBH_pA",
        "title": "Dhamaal {HD} - 2007 - Sanjay Dutt - Arshad Warsi - Superhit Comedy Film",
        "description": "Click the CC icon and watch with English/Arabic Subtitles Javed Jaffrey Best Scene - 14:43 Riteish Deshmukh Hit Comedy - 32:33 ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/LKNHVDPKy7g/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/LKNHVDPKy7g/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/LKNHVDPKy7g/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Shemaroo Comedy",
        "liveBroadcastContent": "none",
        "publishTime": "2014-11-05T05:46:49Z"
    }
}