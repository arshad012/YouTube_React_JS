import { Box, Flex, Hide, IconButton, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { sidebarStateSelector } from "../../Redux/YoutubeSidebar/selector";
import { toggleSidebar } from "../../Redux/YoutubeSidebar/slice";
import { useNavigate } from "react-router-dom";

function SidebarButton_logo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector(sidebarStateSelector);
    
    const handleSidebarToggle = () => {
        dispatch(toggleSidebar());
    }

    const handleClick = () => navigate("/");

    return (
        <Box w='fit-content' h='full'>
            <Flex boxSize='full' alignItems='center' gap={1}>
                <Hide breakpoint='(max-width: 750px)'>
                    <IconButton
                        aria-label='Search database'
                        color='white'
                        icon={<HamburgerIcon boxSize={5} />}
                        borderRadius='full'
                        bg='inherit'
                        _hover={{ bg: '#434242ff' }}
                        _active={{ bg: '#565353ff' }}
                        onClick={handleSidebarToggle}
                    />
                </Hide>

                <Image
                    objectFit='cover'
                    src='../../../youtube_logo.jpg'
                    alt='Dan Abramov'
                    boxSize='100%'
                    h={{ base: '70%', md: '80%' }}
                    borderRadius="5px"
                    onClick={handleClick}
                    _hover={{cursor: "pointer"}}
                />
            </Flex>
        </Box>
    )
}

export default SidebarButton_logo