import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { height } from "../../Utils";
import { useDispatch, useSelector } from "react-redux";
import { searchedDataSelector } from "../../Redux/searchedData/selector";
import WatchHistoryVideoCard from "../../components/WatchHistoryVideoCard";
import { SearchIcon } from "lucide-react";
import { updateClickedVideoDetails, deleteWachedVideo } from "../../Redux/searchedData/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function History() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const { watchHistory } = useSelector(searchedDataSelector);
    const [filteredData, setFilteredData] = useState([]);
    const Hover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const Active = useColorModeValue("#c7c3c2ff", "#565353ff");
    
    useEffect(() => {
        setFilteredData(watchHistory);
    }, [watchHistory]);


    const handleVideoClick = (videoDetails) => {
        dispatch(updateClickedVideoDetails(videoDetails));
        navigate(`/watch?v=${videoDetails.id.videoId}`);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        if (!value) {
            let reversed = watchHistory.toReversed();
            setFilteredData(reversed);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            filterHistory();
        }
    }

    const filterHistory = () => {
        if (!inputValue) {
            return;
        }
        let keyToFind = inputValue.trim().toLowerCase();

        let filtered = watchHistory.filter(video => (video.snippet.title).toLowerCase().includes(keyToFind));
        setFilteredData(filtered);
    }

    const removeFromWatchHistory = (id) => {
        dispatch(deleteWachedVideo(id));
    }

    return (
        <Box minH="100vh">
            <Flex
                direction={{ base: "column-reverse", lg: "row" }}
                justify={{ base: "start", lg: "center" }}
                align={{ base: "center", lg: "start" }}
                gap={{ base: 10, lg: 20 }}
                mt={10}
            >
                {/* First child */}
                <VStack
                    mb={{ base: "15px", sm: "40px" }}
                    gap={"40px"}
                    align="start"
                    w={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
                >
                    <Text
                        fontSize={{ base: "md", sm: "xl", lg: "3xl", "2xl": "4xl" }}
                        fontWeight="bold"
                    >Watch history
                    </Text>

                    {filteredData.map((video, i) => (
                        <WatchHistoryVideoCard 
                            key={i} 
                            item={video} 
                            showChannelIcon={false} 
                            onClick={handleVideoClick} 
                            removeFromWatchHistory={removeFromWatchHistory}
                        />
                    ))}
                </VStack>

                {/* Second child */}
                <Flex
                    position={{ base: "static", lg: "sticky" }}
                    top="100px"
                    h="fit-content"
                    w={{ base: "90%", sm: "80%", md: "70%", lg: "300px" }}
                >
                    <InputGroup>
                        <InputLeftElement>
                            <IconButton
                                aria-label='search-watch-history'
                                icon={<SearchIcon boxsize={{base: 3, sm: 4}} />}
                                borderRadius='full'
                                bg="inherit"
                                onClick={filterHistory}
                                _hover={{ base: { bg: "tranparent" }, md: { bg: Hover } }}
                                _active={{ base: { bg: "tranparent" }, md: { bg: Active } }}
                                mr={2}
                            />
                        </InputLeftElement>
                        <Input
                            w={{ base: "100%", sm: "400px", lg: "300px" }}
                            placeholder="Search watch history"
                            borderRadius="none"
                            borderWidth="0 0 2px 0"
                            value={inputValue}
                            _focus={{ outline: "none", boxShadow: "none" }}
                            onKeyDown={handleKeyDown}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </Flex>
            </Flex>

        </Box>
    )
}

export default History;