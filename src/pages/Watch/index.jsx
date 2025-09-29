import { Box, Text, VStack, Flex, SimpleGrid, HStack, Image, Show } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import HeightFiller from "../../components/HeightFiller";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleIcon } from '@chakra-ui/icons';

import { searchedDataSelector } from "../../Redux/searchedData/selector";
import VideoCard from "../../components/VideoCard";
import MiniVideoCard from "../../components/MiniVideoCard";
import "../../App.css";
import { updateClickedVideoDetails } from "../../Redux/searchedData/slice";
import { useEffect, useRef } from "react";
import BottomBar from "../../components/BottomBar";


function Watch() {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { clickedVideoDetails, videos } = useSelector(searchedDataSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const v = searchParams.get("v") ?? "";

  useEffect(() => {
    videoRef.current.focus();
  }, [])

  const smallDataSlice = videos.slice(0, 20);


  let playingVideoTitle = clickedVideoDetails?.snippet?.title ?? "";
  if (playingVideoTitle) {
    const limit = 60;
    if (playingVideoTitle.length > limit) {
      playingVideoTitle = playingVideoTitle.slice(0, limit);
      playingVideoTitle += "..."
    }
  }

  const handleVideoClick = (videoDetails) => {
    setSearchParams({ v: videoDetails.id.videoId })
    containerRef.current.scrollTo({ top: 0 });
    dispatch(updateClickedVideoDetails(videoDetails));
  }


  return (
    <Box
      maxH='100%'
      color={'white'}
      py={2}
      overflowY="scroll"
      paddingX={{ base: 0, sm: "20px", md: "30px", lg: "40px", xl: "80px" }}
      ref={containerRef}
    // bgColor={{base: "red.200", sm: "purple.200", md: "green.200", lg: "yellow.300", xl: "teal.200", "2xl": "pink.400"}}
    >
      <HeightFiller />

      <Flex
        gap={{ base: "50px", lg: "15px", xl: "30px", "2xl": "50px" }}
        mt={5} 
        h="fit-content"
        direction={{ base: "column", lg: 'row' }}
      >
        {clickedVideoDetails?.kind &&
        // 1st child
          <VStack w={{ base: "full", lg: "67%" }} h="fit-content" align="start">
            <Box w="100%" h="fit-content" borderRadius="2xl" overflow="hidden" ref={videoRef}>
              <iframe
                width="100%"
                height="500"
                // src={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1&videoEmbeddable=true&type=playlist`}
                src={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen={true}
                autoFocus={true}
              ></iframe>
            </Box>

            <Box px={{ base: 5, sm: 0 }}>
              <Text fontSize="xl">{clickedVideoDetails.snippet.title}</Text>

              <HStack justify="start" align="center" w="full" gap={5}>
                <Box h={{ base: "40px", sm: "50px" }} w={{ base: "40px", sm: "50px" }} mt={1}>
                  <Image boxSize="full" borderRadius="full" src={clickedVideoDetails.snippet.thumbnails.default.url} alt="" />
                </Box>
                <Text>{clickedVideoDetails.snippet.channelTitle} <CheckCircleIcon color="whiteAlpha.700" boxSize={3} /></Text>
              </HStack>
            </Box>

          </VStack>
        }


        {/* 2nd child */}
        <Flex
          direction={"column"}
          flex={{ base: "none", lg: 1 }}
          w={{ base: "95%", lg: "auto" }}
          m="auto"
          borderRadius="2xl"
          overflow="hidden"
          borderColor="whiteAlpha.700"
          borderWidth={1}
          h="500px"
          mt={0}
        >
          <Box
            minH="100px"
            bgColor="#212121"
            p={3}
          >
            <Text fontSize="lg" fontWeight="bold">{playingVideoTitle}</Text>
            <Text color="whiteAlpha.700">{clickedVideoDetails?.snippet?.channelTitle}</Text>
          </Box>

          <VStack
            className="scrollbar-hide"
            bgColor="#0f0f0f"
            flex={1}
            overflowY="scroll"
          >
            {smallDataSlice.map((video, i) => (
              <MiniVideoCard
                key={i}
                item={video}
                onClick={handleVideoClick}
              />
            ))}
          </VStack>
        </Flex>

      </Flex>

      <SimpleGrid mt={20} columns={{ base: 1, sm: 2, lg: 3 }} spacingX='25px' spacingY='40px' paddingX={{ base: 0, sm: "10px", lg: "20px" }}>
        {videos.map((video, i) => (
          <VideoCard
            key={i}
            item={video}
            onClick={handleVideoClick}
          />
        ))}
      </SimpleGrid>

      <Show breakpoint='(max-width: 750px)'>
        <BottomBar />
      </Show>

      {/* <HeightFiller /> */}
    </Box>
  )
}

export default Watch;