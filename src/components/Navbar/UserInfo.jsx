import { Box, Button, Flex, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton, Text, useColorMode, useColorModeValue, useToast } from "@chakra-ui/react";
import { AddIcon, BellIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineSignalSlash } from "react-icons/hi2";
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";

function UserInfo() {
    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const textColor = useColorModeValue("black", "white");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const menuActive = useColorModeValue("#c7c3c2ff", "#565353ff");
    const menuListHover = useColorModeValue("#c7c3c2ff", "#585555ff");

    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};

    const handleNonWorkingFeatureClick = (title) => {
        toast({
          title: title,
          description: "This is not a working feature, yet you are seeing it just to feel like real youtube UI.",
          status: 'warning',
          duration: 9000,
          isClosable: true,
          position: 'bottom-right'
        })
    }
    
    return (
        <Box h='full'>
            <Flex justify='end' alignItems='center' h='full' gap={{ base: 2, lg: 3 }}>

                <Menu>
                    <MenuButton 
                        as={Button} 
                        leftIcon={<AddIcon />} 
                        size='sm' 
                        borderRadius='full' 
                        bg={bgColor} 
                        color={textColor} 
                        _hover={{ bg: menuHover }} 
                        _active={{ bg: menuActive }}
                    >
                        Create
                    </MenuButton>

                    <MenuList bg={bgColor} border='none'>
                        <MenuItem 
                            bg={bgColor} 
                            color={textColor} 
                            _hover={{ bg: menuListHover }}
                            onClick={() => handleNonWorkingFeatureClick('Upload video error')}
                        >
                            <PlusSquareIcon mr={4} boxSize={5} /> Upload video
                        </MenuItem>

                        <MenuItem 
                            bg={bgColor} 
                            color={textColor} 
                            _hover={{ bg: menuListHover }}
                            onClick={() => handleNonWorkingFeatureClick('Go live error')}
                        >
                            <HiOutlineSignalSlash style={{ marginRight: '15px' }} size={22} /> Go live
                        </MenuItem>
                        <MenuItem 
                            bg={bgColor} 
                            color={textColor} 
                            _hover={{ bg: menuListHover }}
                            onClick={() => handleNonWorkingFeatureClick('Create post error')}
                        >
                            <IoCreateOutline style={{ marginRight: '15px' }} size={22} /> Create post
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        borderRadius='full'
                        bg='inherit'
                       colorScheme='pink'
                        _hover={{ bg: menuHover }} 
                        _active={{ bg: menuActive }}
                        icon={<BellIcon boxSize={6} color={textColor} />} />

                    <MenuList bg={bgColor} border='none'>
                        <Text 
                            color={textColor} 
                            px={5} 
                            py={2} 
                            borderBottom='1px' 
                            borderBottomWidth='2px'
                        >
                            Notifications
                        </Text>
                        {/* <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>Upload video</MenuItem> */}
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton>
                        <Avatar size='sm' src={youtubeLoggedinUser?.image} />
                    </MenuButton>

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

                        {/* <MenuItem 
                            bg={bgColor} 
                            color={textColor} 
                            _hover={{ bg: menuHover }}
                        >
                            Upload video
                        </MenuItem> */}
                        
                        <MenuItem 
                            onClick={toggleColorMode}
                            bg={bgColor} 
                            color={textColor} 
                            _hover={{ bg: menuHover }}
                        >Appearece: {colorMode === "light" ? "Dark" : "Light"}</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    )
}

export default UserInfo;