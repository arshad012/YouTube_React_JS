import { Box, Flex, Hide, IconButton, Show, Spacer, useColorModeValue } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import SidebarButton_logo from "./SidebarButton_logo";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";
import { useEffect, useRef, useState } from "react";
import SmallScreenSearchBar from "../SmallScreenSearchBar";
import { useSelector } from "react-redux";
import { searchedDataSelector } from "../../Redux/searchedData/selector";
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";

function Navbar() {
    const bottombarBgColor = useColorModeValue("rgba(255,255,255, 0.9)", "rgba(15, 15, 15, 0.8)");

    const [showSearchBar, setShowSearchBar] = useState(false);
    const { videos } = useSelector(searchedDataSelector);
    const isFirstRun = useRef(true);
    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};

    useEffect(() => {
        if(isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        handleToggleSmallScreenSearchBar();
    }, [videos]);

    const handleToggleSmallScreenSearchBar = () => {
        setShowSearchBar(prev => !prev);
    }

    return (
        <Box
            bg={bottombarBgColor}
            backdropFilter='blur(20px)'
            h='60px'
            w='100%'
            pl={4}
            pr={{ base: 3, md: 5, lg: 7 }}
            position='sticky'
            top='0'
            left='0'
            zIndex={1000}
        >
            <Flex boxSize='full' justify={{ sm: 'space-between', lg: 'start' }} alignItems={'center'}>
                <SidebarButton_logo />
                <Spacer />
                <Hide breakpoint='(max-width: 750px)'>
                    <Box w='73%' h='full'>
                        <Flex boxSize='full' justify={{ base: 'end', md: 'space-between' }} gap={4}>
                            <SearchBar />
                            <UserInfo />
                        </Flex>
                    </Box>
                </Hide>

                <Show breakpoint='(max-width: 750px)'>
                    <IconButton
                        icon={<Search2Icon boxSize={4} />}
                        borderRadius='full'
                        bg='inherit'
                        onClick={() => setShowSearchBar(prev => !prev)}
                        _hover={{ bg: "" }}
                        _active={{ bg: "" }}
                    />

                    {showSearchBar &&
                        <SmallScreenSearchBar onClick={handleToggleSmallScreenSearchBar} />
                    }
                </Show>
            </Flex>
        </Box>
    )
}

export default Navbar;