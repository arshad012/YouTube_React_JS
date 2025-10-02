import { Box, Image, Text, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { getTimeTaken } from "../../Utils";

function VideoCard({ item, onClick }) {
    const textColor = useColorModeValue("#6c6c6c", "whiteAlpha.700");

    let title = item.snippet.title;
    if(window.innerWidth <= 1030) {
        title = title.slice(0, 50);
        title += "...";
    }

    if(item.id.channelId) {
        return <></> // it means this item is a channel and not a video so we will not append this item.
    }

    return (
        <Box>
            <VStack>
                <Image
                    src={item.snippet.thumbnails.high.url}
                    alt="Thumbnail not available" w="full"
                    borderRadius="xl"
                    onClick={() => onClick(item)}
                    _hover={{cursor: "pointer"}}
                />

                <HStack justify="start" align="start" w="full" px={{base: 5, sm: 0}}>
                    <Box h="40px" w="40px" mt={1}>
                        <Image boxSize="full" borderRadius="full" src={item.snippet.thumbnails.default.url} alt="" />
                    </Box>
                    <VStack flex={1} align="start" gap={0}>
                        <Text
                            onClick={() => onClick(item)}
                            _hover={{cursor: "pointer"}}
                            fontWeight='bold'
                        >{title}</Text>
                        <Text color={textColor} fontSize={{base: "xs", sm: "sm"}}>{item.snippet.channelTitle}</Text>
                        <Text color={textColor} fontSize={{base: "xs", sm: "sm"}}>{getTimeTaken(item.snippet.publishTime)}</Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    )
}

export default VideoCard;

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