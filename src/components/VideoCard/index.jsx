import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";

function VideoCard({ item, onClick }) {
    let title = item.snippet.title;
    if(window.innerWidth <= 1030) {
        title = title.slice(0, 50);
        title += "...";
    }

    return (
        <Box onClick={() => onClick(item)} _hover={{cursor: "pointer"}}>
            <VStack>
                <Image
                    src={item.snippet.thumbnails.high.url}
                    alt="Thumbnail not available" w="full"
                    borderRadius="xl"
                />

                <HStack justify="start" align="start" w="full" px={{base: 5, sm: 0}}>
                    <Box h="40px" w="40px" mt={1}>
                        <Image boxSize="full" borderRadius="full" src={item.snippet.thumbnails.default.url} alt="" />
                    </Box>
                    <VStack flex={1} align="start" gap={0}>
                        <Text>{title}</Text>
                        <Text color="whiteAlpha.700" fontSize={{base: "xs", sm: "sm"}}>{item.snippet.channelTitle}</Text>
                        <Text color="whiteAlpha.700" fontSize={{base: "xs", sm: "sm"}}>{item.snippet.publishTime}</Text>
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