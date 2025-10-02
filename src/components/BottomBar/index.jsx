import { Box, HStack, Text, VStack, Avatar, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { House, Youtube, Package2 } from 'lucide-react';
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";
import { useSelector } from "react-redux";
import { showMenuSmallScreenSelector } from "../../Redux/ShowMenuSmallScreen/selector";

function BottomBar() {
    const bgColor = useColorModeValue("rgba(255,255,255, 0.9)", "rgba(15, 15, 15, 0.8)");

    const { showMenu } = useSelector(showMenuSmallScreenSelector);
    const navigate = useNavigate();
    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};

    const userNavigations = [
        {
            id: "home",
            label: "Home",
            path: "/",
            icon: <House size={20} />
        },
        {
            id: "shorts",
            label: "Shorts",
            path: "/shorts",
            icon: <Youtube size={20} />
            
        },
        {
            id: "subscriptions",
            label: "Subscriptions",
            path: "/subscriptions",
            icon: <Package2 size={20} />
        },
        {
            id: "you",
            label: "You",
            path: "/you",
            icon: <Avatar size='xs' src={youtubeLoggedinUser?.image} />
        },
    ];

    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <Box
            position='absolute'
            left={0}
            bottom={showMenu ? "60px" : 0}
            w='100%'
            h='50px'
            bgColor={bgColor}
            backdropFilter='blur(20px)'
            py={1}
            transition="all 0.2s"
        >
            <HStack 
                boxSize="full"
                justify="space-around"
                align="center"
                px="30px"
            >
                {userNavigations.map(item => (
                    <VStack key={item.id} gap={1} onClick={() => handleClick(item.path)} _hover={{cursor: "pointer"}}>
                        <Box>{item.icon}</Box>
                        <Text fontSize="xs">{item.label}</Text>
                    </VStack>
                ))}
            </HStack>
        </Box>
    )
}

export default BottomBar