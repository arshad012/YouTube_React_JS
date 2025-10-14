import { Box, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { sidebarStateSelector } from '../../Redux/YoutubeSidebar/selector';
import { toggleSidebar } from '../../Redux/YoutubeSidebar/slice';
import { House, Youtube, History, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import "./youtubeDrawer.css";

function YoutubeDrawer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSidebarOpen } = useSelector(sidebarStateSelector);
    const bgColor = useColorModeValue("#ffffff", "#0f0f0f");
    // const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const Hover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const Active = useColorModeValue("#c7c3c2ff", "#565353ff");

    const handleDrawerOverlayClick = () => {
        dispatch(toggleSidebar());
    }

    const blocks = [
        {
            icon: <House size={20} />,
            label: "Home",
            redirectTo: "/"
        },
        {
            icon: <Youtube size={20} />,
            label: "Shorts",
            redirectTo: "/shorts"
        },
        {
            icon: <History size={20} />,
            label: "History",
            redirectTo: "/watch-history"
        },
        {
            icon: <Clock size={20} />,
            label: "Watch later",
            redirectTo: "/watch-later"
        },
    ];

    const handleBlockClick = (path) => {
        dispatch(toggleSidebar());
        navigate(path);
    }

    return (
        <>
            <Box
                name="drawer"
            >
                {isSidebarOpen && 
                    <Box
                        name="drawer-overlay"
                        id="drawer-overlay"
                        position="fixed"
                        top="60px"
                        left="0"
                        h={"calc(100vh - 60px)"}
                        w={"100%"}
                        bgColor="rgba(0, 0, 0, 0.4)"
                        onClick={handleDrawerOverlayClick}
                    ></Box>
                }

                <Box
                    name="drawer-content"
                    id="drawer-content"
                    transition={isSidebarOpen ? "all 0.5s" : "all 0.2s"}
                    width={isSidebarOpen ? "250px" : 0}
                    height="calc(100vh - 60px)"
                    position="fixed"
                    top="60px"
                    left="0"
                    overflowX="hidden"
                    overflowY="auto"
                    bgColor={bgColor}
                    className='scrollbar-hide'
                >
                    <Box
                        name="drawer-header"
                        id="drawer-header"
                    ></Box>

                    <Box
                        name="drawer-body"
                        id="drawer-body"
                    >
                        <VStack px={1} gap={1}>
                            {
                                blocks.map((item, i) => (
                                    <HStack 
                                        key={i}
                                        _hover={{ bg: Hover }}
                                        _active={{ bg: Active }}
                                        w="full"
                                        justify="start"
                                        pl={6}
                                        py={"10px"}
                                        gap={4}
                                        borderRadius="lg"
                                        cursor="pointer"
                                        onClick={() => handleBlockClick(item?.redirectTo)}
                                    >
                                        {item.icon}
                                        <Text fontWeight="medium">{item.label}</Text>
                                    </HStack>
                                ))
                            }
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default YoutubeDrawer;