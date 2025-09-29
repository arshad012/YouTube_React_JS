import { Box, Show, SimpleGrid } from "@chakra-ui/react";
import HeightFiller from "../../components/HeightFiller";
import { useSelector, useDispatch } from "react-redux";
import { searchedDataSelector } from '../../Redux/searchedData/selector';
import VideoCard from "../../components/VideoCard";
import { useNavigate } from "react-router-dom";
import { updateClickedVideoDetails } from "../../Redux/searchedData/slice";
import EmptyPage from "../../components/EmptyPage";
import BottomBar from "../../components/BottomBar";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videos } = useSelector(searchedDataSelector);

    const handleVideoClick = (videoDetails) => {
        dispatch(updateClickedVideoDetails(videoDetails));
        navigate(`/watch?v=${videoDetails.id.videoId}`);
    }

    if (videos.length == 0) {
        return <EmptyPage />
    }

    return (
        <Box
            maxH='100%'
            color={'white'}
            py={2}
            overflowY="scroll"
            paddingX={{ base: 0, sm: 5, lg: 10 }}
        >
            <HeightFiller />

            <SimpleGrid
                mt={{base: 0, md: 10}}
                columns={{ base: 1, sm: 2, xl: 3 }}
                spacingX={{base: 0, sm: '25px'}}
                spacingY='40px'
                paddingX={{ base: 0, sm: "10px", md: "25px", lg: "40px" }}
            >
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

            <HeightFiller />
        </Box>
    )
}

export default Home;