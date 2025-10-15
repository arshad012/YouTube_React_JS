import { Box, VStack, Image, HStack, Text, Flex, Hide, Show, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Button, Spacer, useToast } from "@chakra-ui/react";
import { getTimeTaken } from "../../Utils";
import { AddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { EllipsisVertical } from "lucide-react";

function WatchHistoryVideoCard({ item, onClick, removeFromWatchHistory }) {
    const textColor = useColorModeValue("#6c6c6c", "whiteAlpha.700");
    const menuListHover = useColorModeValue("#c7c3c2ff", "#585555ff");
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const menuActive = useColorModeValue("#c7c3c2ff", "#565353ff");
    const toast = useToast();

    let title = item.snippet.title;
    if (window.innerWidth <= 1030) {
        title = title.slice(0, 80);
        title += "...";
    }

    if (item.id.channelId) {
        return <></> // it means this item is a channel and not a video so we will not append this item.
    }

    // const handleNonWorkingFeatureClick = () => {
    //     toast({
    //     //   title: title,
    //       description: "Remove feature is under maintanance",
    //       status: 'warning',
    //       duration: 5000,
    //       isClosable: true,
    //       position: 'bottom'
    //     })
    // }

    return (
        <Box>
            <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 2, sm: 5 }}>
                <Hide below="sm">
                    <Box w={{ base: "full", sm: "40%" }}>
                        <Image
                            src={item.snippet.thumbnails.high.url}
                            alt="Thumbnail not available"
                            w="full"
                            borderRadius={{ sm: "xl" }}
                            onClick={() => onClick(item)}
                            _hover={{ cursor: "pointer" }}
                        />
                    </Box>

                    <Box flex={1}>
                        <VStack justify="start" align="start" px={{ base: 5, sm: 0 }}>

                            <Flex justify="space-between">
                                <Text
                                    fontSize={{ base: "xs", sm: "sm", lg: "lg" }}
                                    fontWeight="bold"
                                    onClick={() => onClick(item)}
                                    _hover={{ cursor: "pointer" }}
                                >{item.snippet.title}</Text>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        leftIcon={<EllipsisVertical />}
                                        borderRadius='full'
                                        bg=""
                                        color={textColor}
                                        _hover={{ bg: "" }}
                                        _active={{ bg: "" }}
                                    // _hover={{ bg: menuHover }}
                                    // _active={{ bg: menuActive }}
                                    />

                                    <MenuList bg={bgColor} border='none'>
                                        <MenuItem
                                            bg={bgColor}
                                            color={textColor}
                                            _hover={{ bg: menuListHover }}
                                            onClick={() => removeFromWatchHistory(item.id.videoId)}
                                        >Remove from watch history
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>

                            <Text color={textColor} fontSize={{ base: "xs", sm: "sm" }}>{item.snippet.channelTitle} <CheckCircleIcon boxSize={3} ml={1} /></Text>
                            <Text color={textColor} fontSize={{ base: "xs", sm: "sm" }}>{item.snippet.description}</Text>
                        </VStack>
                    </Box>
                </Hide>

                <Show below="sm">
                    <Flex px={5} p={0} gap={3}>
                        <Box minW="30%" maxW="30%">
                            <Image
                                src={item.snippet.thumbnails.high.url}
                                alt="Thumbnail not available"
                                w="full"
                                borderRadius="md"
                                onClick={() => onClick(item)}
                                _hover={{ cursor: "pointer" }}
                            />
                        </Box>

                        <Text onClick={() => onClick(item)}>{title}</Text>
                        <Spacer />
                        <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<EllipsisVertical />}
                                borderRadius='full'
                                bg=""
                                w="0"
                                color={textColor}
                                _hover={{ bg: "" }}
                                _active={{ bg: "" }}
                                // _hover={{ bg: menuHover }}
                                // _active={{ bg: menuActive }}
                            />

                            <MenuList bg={bgColor} border='none'>
                                <MenuItem
                                    bg={bgColor}
                                    color={textColor}
                                    _hover={{ bg: menuListHover }}
                                    onClick={() => removeFromWatchHistory(item.id.videoId)}
                                >Remove from watch history
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    <VStack align="start" gap={0}>
                        <Text color={textColor} fontSize="sm">{item.snippet.channelTitle} <CheckCircleIcon boxSize={3} ml={1} /></Text>
                        <Text color={textColor} fontSize="sm">{getTimeTaken(item.snippet.publishTime)}</Text>
                    </VStack>
                </Show>
            </Flex>
        </Box>
    )
}

export default WatchHistoryVideoCard;


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