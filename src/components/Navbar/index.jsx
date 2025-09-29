import { Box, Flex, Hide, IconButton, Show, Spacer } from "@chakra-ui/react";

import SidebarButton_logo from "./SidebarButton_logo";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SmallScreenSearchBar from "../SmallScreenSearchBar";
import { Search2Icon, ArrowBackIcon } from "@chakra-ui/icons";

function Navbar() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleToggleSmallScreenSearchBar = () => {
        setShowSearchBar(prev => !prev);
    }

    return (
        <Box
            bgColor='rgba(15, 15, 15, 0.7)'
            backdropFilter='blur(20px)'
            h='60px'
            w='100%'
            pl={{ base: 4, lg: 5 }}
            pr={{ base: 3, lg: 7 }}
            position='absolute'
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
                        color='white'
                        icon={<Search2Icon size={22} />}
                        borderRadius='full'
                        bg='inherit'
                        _hover={{ bg: '#434242ff' }}
                        _active={{ bg: '#565353ff' }}
                        onClick={() => setShowSearchBar(prev => !prev)}
                    />
                    {showSearchBar && 
                        <Flex
                            align="center"
                            position='absolute'
                            top='0'
                            left='0'
                            h='60px'
                            w='100%'
                            pl={{ base: 4, lg: 5 }}
                            pr={{ base: 3, lg: 7 }}
                            zIndex={2000}
                            bg="#0f0f0f"
                            gap={2}
                            color="white"
                        >
                            <IconButton
                                color='white'
                                icon={<ArrowBackIcon boxSize={5} />}
                                borderRadius='full'
                                bg='inherit'
                                _hover={{ bg: '#434242ff' }}
                                _active={{ bg: '#565353ff' }}
                                onClick={handleToggleSmallScreenSearchBar}
                            />
                            <SmallScreenSearchBar  
                                onClick={handleToggleSmallScreenSearchBar}
                            />
                        </Flex>
                    }
                </Show>
            </Flex>
        </Box>
    )
}

export default Navbar;