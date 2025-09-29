import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons';
import { useSelector } from "react-redux";
import { searchedDataSelector } from "../../Redux/searchedData/selector";

function MiniVideoCard({ item, onClick }) {
    const { clickedVideoDetails } = useSelector(searchedDataSelector);

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
            _hover={{ bgColor: "#212121", cursor: "pointer" }}
            justify="start"
            p={2}
            w="full"
            bgColor={item.id.videoId === clickedVideoDetails.id.videoId ? "#3a3838ff" : ""}
        >
            <Box justify="center" align="center" w={{base: "10px", xl: "15px"}}>
                {item.id.videoId === clickedVideoDetails.id.videoId &&
                    <TriangleUpIcon boxSize={3} transform="rotate(90deg)" />
                }
            </Box>

            <Box
                w={{base: "20%", lg: "25%"}}
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