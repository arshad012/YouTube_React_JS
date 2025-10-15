import {
  Box,
  Text,
  VStack,
  Flex,
  HStack,
  Image,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { searchedDataSelector } from "../../Redux/searchedData/selector";
import MiniVideoCard from "../../components/MiniVideoCard";
import { updateClickedVideoDetails } from "../../Redux/searchedData/slice";
import WatchPageVideoCard from "../../components/WatchPageVideoCard";
import { getTimeTaken } from "../../Utils";
import { useEffect } from "react";

function Watch({ triggerScroll }) {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("#6c6c6c", "whiteAlpha.700");
  const bgColor = useColorModeValue("#e8e3e2", "#303030");
  const borderColor = useColorModeValue("gray.500", "whiteAlpha.700");

  const dispatch = useDispatch();
  const { clickedVideoDetails, videos } = useSelector(searchedDataSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const v = searchParams.get("v") ?? "";

  useEffect(() => {
    triggerScroll();
  }, []);

  const windowWidth = window.innerWidth;

  const smallDataSlice = videos.slice(0, 20);

  let playingVideoTitle = clickedVideoDetails?.snippet?.title ?? "";
  if (playingVideoTitle) {
    const limit = 60;
    if (playingVideoTitle.length > limit) {
      playingVideoTitle = playingVideoTitle.slice(0, limit);
      playingVideoTitle += "...";
    }
  }

  const handleVideoClick = (videoDetails) => {
    setSearchParams({ v: videoDetails.id.videoId });
    triggerScroll();
    dispatch(updateClickedVideoDetails(videoDetails));
  };

  return (
    <Box>
      {/* Top part */}
      <Flex
        gap={{ base: "50px", lg: "15px", xl: "30px", "2xl": "50px" }}
        mt={{ base: 0, md: 5 }}
        direction={{ base: "column", lg: "row" }}
        paddingX={{ base: 0, md: "30px", lg: "40px", xl: "80px" }}
      >
        {clickedVideoDetails?.kind && (
          // 1st child
          <VStack w={{ base: "full", lg: "67%" }} h="fit-content" align="start">
            <Box
              w="100%"
              h="fit-content"
              borderRadius={{ md: "2xl" }}
              overflow="hidden"
            >
              <iframe
                width="100%"
                height={windowWidth < 600 ? "250" : "500"}
                src={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1&volume=50`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
                autoFocus={true}
              ></iframe>
            </Box>

            <Box px={{ base: 5, md: 0 }}>
              <Text fontSize={{ base: "md", sm: "lg", md: "xl" }}>
                {clickedVideoDetails.snippet.title}
              </Text>

              <HStack justify="start" align="center" w="full" gap={5}>
                <Box
                  h={{ base: "40px", sm: "50px" }}
                  w={{ base: "40px", sm: "50px" }}
                  mt={1}
                >
                  <Image
                    boxSize="full"
                    borderRadius="full"
                    src={clickedVideoDetails.snippet.thumbnails.default.url}
                    alt=""
                  />
                </Box>
                <Text>
                  {clickedVideoDetails.snippet.channelTitle}{" "}
                  <CheckCircleIcon color="whiteAlpha.700" boxSize={3} />
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                mt={2}
                color={textColor}
              >
                {getTimeTaken(clickedVideoDetails.snippet.publishTime)}
              </Text>
            </Box>
          </VStack>
        )}

        {/* 2nd child */}
        <Flex
          direction={"column"}
          flex={{ base: "none", lg: 1 }}
          w={{ base: "95%", lg: "auto" }}
          m="auto"
          borderRadius="2xl"
          overflow="hidden"
          borderColor={borderColor}
          borderWidth={1}
          h="500px"
          mt={0}
        >
          <Box minH="100px" bgColor={bgColor} p={3}>
            <Text fontSize="lg" fontWeight="bold">
              {playingVideoTitle}
            </Text>
            <Text color={textColor}>
              {clickedVideoDetails?.snippet?.channelTitle}
            </Text>
          </Box>

          <VStack
            className="scrollbar-hide"
            bgColor={colorMode === "light" ? "#ffffff" : "#0f0f0f"}
            flex={1}
            overflowY="scroll"
          >
            {smallDataSlice.map((video, i) => (
              <MiniVideoCard key={i} item={video} onClick={handleVideoClick} />
            ))}
          </VStack>
        </Flex>
      </Flex>

      {/* Below part */}

      <VStack
        mt={20}
        mb={{ base: "15px", sm: "40px" }}
        gap={"40px"}
        align="start"
        paddingX={{ sm: "30px", md: "40px", lg: "50px", xl: "120px" }}
      >
        {videos.map((video, i) => (
          <WatchPageVideoCard key={i} item={video} onClick={handleVideoClick} />
        ))}
      </VStack>
    </Box>
  );
}

export default Watch;
