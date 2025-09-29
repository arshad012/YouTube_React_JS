import { Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarStateSelector } from '../../Redux/YoutubeSidebar/selector';
import { toggleSidebar } from '../../Redux/YoutubeSidebar/slice';
import "./youtubeDrawer.css";

function YoutubeDrawer() {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector(sidebarStateSelector);

    const handleDrawerOverlayClick = () => {
        dispatch(toggleSidebar());
    }

    return (
        <>
            <Box
                name="drawer"
                id="drawer"
            >
                <Box
                    name="drawer-overlay"
                    id="drawer-overlay"
                    position="absolute"
                    top="60px"
                    left="0"
                    height={isSidebarOpen ? "calc(100vh - 60px)" : 0}
                    width={isSidebarOpen ? "100%" : 0}
                    bgColor="rgba(0, 0, 0, 0.4)"
                    display={isSidebarOpen ? "block" : "none"}
                    onClick={handleDrawerOverlayClick}
                ></Box>

                <Box
                    name="drawer-content"
                    id="drawer-content"
                    transition={isSidebarOpen ? "all 0.5s" : "all 0.2s"}
                    width={isSidebarOpen ? "250px" : 0}
                    height="calc(100vh - 60px)"
                    position="absolute"
                    top="60px"
                    left="0"
                    overflowX="hidden"
                    overflowY="scroll"
                    bgColor='#222121ff'
                    className='scrollbar-hide'
                >
                    <Box
                        name="drawer-header"
                        id="drawer-header"
                    ></Box>

                    <Box
                        name="drawer-body"
                        id="drawer-body"
                    ></Box>
                </Box>
            </Box>
        </>
    )
}

export default YoutubeDrawer;