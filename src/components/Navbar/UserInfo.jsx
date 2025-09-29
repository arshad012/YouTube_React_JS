import { Box, Button, Flex, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, BellIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineSignalSlash } from "react-icons/hi2";
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";

function UserInfo() {
    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};
    
    return (
        <Box h='full'>
            <Flex justify='end' alignItems='center' h='full' gap={{ base: 2, lg: 3 }}>

                <Menu>
                    <MenuButton as={Button} leftIcon={<AddIcon />} size='sm' borderRadius='full' bg='#303030' color='white' _hover={{ bg: '#434242ff' }} _active={{ bg: '#565353ff' }}>
                        Create
                    </MenuButton>
                    <MenuList bg='#282828' border='none'>
                        <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>
                            <PlusSquareIcon mr={4} boxSize={5} /> Upload video
                        </MenuItem>
                        <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>
                            <HiOutlineSignalSlash style={{ marginRight: '15px' }} size={22} /> Go live
                        </MenuItem>
                        <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>
                            <IoCreateOutline style={{ marginRight: '15px' }} size={22} /> Create post
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        borderRadius='full'
                        bg='inherit'
                        color='white'
                        _hover={{ bg: '#434242ff' }}
                        _active={{ bg: '#565353ff' }}
                        icon={<BellIcon boxSize={6} color='white' />} />

                    <MenuList bg='#282828' border='none'>
                        <Text color='white' px={5} py={2} borderBottom='1px' borderColor='#585555ff' borderBottomWidth='2px'>
                            Notifications
                        </Text>
                        {/* <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>Upload video</MenuItem> */}
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton>
                        <Avatar size='sm' src={youtubeLoggedinUser?.image} />
                    </MenuButton>

                    <MenuList bg='#282828' border='none'>
                        <Text color='white' px={5} py={2} borderBottom='1px' borderColor='#585555ff' borderBottomWidth='2px'>
                            Your Profile
                        </Text>
                        {/* <MenuItem bg='inherit' color='white' _hover={{ bg: '#585555ff' }}>Upload video</MenuItem> */}
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    )
}

export default UserInfo;