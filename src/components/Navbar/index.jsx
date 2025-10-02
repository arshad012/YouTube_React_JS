import { Box, Flex, Hide, IconButton, MenuButton, Show, Spacer, Switch, useColorModeValue, Menu, Avatar, MenuList, MenuItem, Text, useColorMode } from "@chakra-ui/react";
import { Search2Icon, ArrowBackIcon, DragHandleIcon } from "@chakra-ui/icons";

import SidebarButton_logo from "./SidebarButton_logo";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SmallScreenSearchBar from "../SmallScreenSearchBar";
import { toggleShowMenu } from '../../Redux/ShowMenuSmallScreen/slice';
import { useDispatch, useSelector } from "react-redux";
import { showMenuSmallScreenSelector } from "../../Redux/ShowMenuSmallScreen/selector";
import { searchedDataSelector } from "../../Redux/searchedData/selector";
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bottombarBgColor = useColorModeValue("rgba(255,255,255, 0.9)", "rgba(15, 15, 15, 0.8)");
    const bgColor = useColorModeValue("#ffffff", "#0f0f0f");
    const textColor = useColorModeValue("black", "white");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");

    const [showSearchBar, setShowSearchBar] = useState(false);
    const dispatch = useDispatch();
    const { videos } = useSelector(searchedDataSelector);
    const { showMenu } = useSelector(showMenuSmallScreenSelector);
    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};

    const handleToggleSmallScreenSearchBar = () => {
        setShowSearchBar(prev => !prev);
    }

    const handleToggleShowMenu = () => {
        dispatch(toggleShowMenu());
    }

    return (
        <Box
            bottombarBgColor={bottombarBgColor}
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
                        icon={<Search2Icon boxSize={4} />}
                        borderRadius='full'
                        bg='inherit'
                        onClick={() => setShowSearchBar(prev => !prev)}
                        _hover={{bg: ""}}
                        _active={{bg: ""}}
                    />
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            borderRadius='full'
                            bg='inherit'
                            _hover={{bg: ""}}
                            icon={<DragHandleIcon boxSize={4} color={textColor} />} />

                        <MenuList bg={bgColor} border='none'>
                            <Text
                                color={textColor}
                                px={5}
                                py={2}
                                borderBottom='1px'
                                borderBottomWidth='2px'
                            >
                                Profile
                            </Text>

                            <MenuItem
                                onClick={toggleColorMode}
                                bg={bgColor}
                                color={textColor}
                                _hover={{ bg: menuHover }}
                            >
                                Appearece: {colorMode === "light" ? "Dark" : "Light"}
                            </MenuItem>

                            {videos.length > 0 &&
                                <MenuItem
                                    disabled={true}
                                    onClick={handleToggleShowMenu}
                                    bg={bgColor}
                                    color={textColor}
                                    _hover={{ bg: menuHover }}
                                >
                                    {showMenu ? "Hide menu" : "Show menu"}
                                </MenuItem>
                            }
                        </MenuList>
                    </Menu>

                    {showSearchBar &&
                        <Flex
                            align="center"
                            position='absolute'
                            top='0'
                            left='0'
                            h='60px'
                            w='100%'
                            pl={{ base: 1, lg: 5 }}
                            pr={{ base: 2, lg: 7 }}
                            zIndex={2000}
                            bg={bgColor}
                            gap={1}
                        >
                            <IconButton
                                icon={<ArrowBackIcon boxSize={5} color={textColor} />}
                                borderRadius='full'
                                bg='inherit'
                                _hover={{bg: ""}}
                                _active={{bg: ""}}
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