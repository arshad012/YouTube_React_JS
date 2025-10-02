import { Box, Flex, HStack, Image, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons';
import { useSelector } from "react-redux";
import { searchedDataSelector } from "../../Redux/searchedData/selector";

function MiniVideoCard({ item, onClick }) {
    const { clickedVideoDetails } = useSelector(searchedDataSelector);

    const bgHover = useColorModeValue("#f2efefff", "#212121");
    const textColor = useColorModeValue("black", "white");
    const { colorMode } = useColorMode();
    
    let selectedItemBg = "";
    if(item.id.videoId === clickedVideoDetails.id.videoId && colorMode === "light") {
        selectedItemBg = "#dfdbdbff";
    }
    if(item.id.videoId === clickedVideoDetails.id.videoId && colorMode === "dark") {
        selectedItemBg = "#3a3838ff";
    }
    // const bgColor = useSelector()

    let title = item.snippet.title ?? "";
    const limit = 60;
    if (title.length > limit) {
        title = title.slice(0, limit);
        title += "..."
    }

    if(item.id.channelId) {
        return <></> // it means this item is a channel and not a video so we will not append this item.
    }

    return (
        <HStack
            onClick={() => onClick(item)}
            _hover={{ bgColor: bgHover, cursor: "pointer" }}
            justify="start"
            p={2}
            w="full"
            // bgColor={selectedItem && colorMode === "light" ?  "#ffffff" : "#3a3838ff"}
            bgColor={selectedItemBg}
        >
            <Box justify="center" align="center" w={{base: "10px", xl: "15px"}}>
                {item.id.videoId === clickedVideoDetails.id.videoId &&
                    <TriangleUpIcon boxSize={3} transform="rotate(90deg)" color={textColor} />
                }
            </Box>

            <Box
                w={{base: "25%", lg: "30%"}}
                borderRadius="md"
                overflow="hidden"
            >
                <Image
                    src={item.snippet.thumbnails.medium.url}
                    boxSize="full"
                />
            </Box>

            <Flex
                flex={1}
                align="start"
                boxSize="full"
            >
                <Text>{title}</Text>
            </Flex>
        </HStack>
    )
}

export default MiniVideoCard;