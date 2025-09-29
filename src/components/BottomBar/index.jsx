import { Box, HStack, Text, VStack, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { House, Youtube, Package2 } from 'lucide-react';
import { youtubeLoggedinUser_localStorage_key } from "../../Utils";

function BottomBar() {
    const navigate = useNavigate();
    const youtubeLoggedinUser = JSON.parse(localStorage.getItem(youtubeLoggedinUser_localStorage_key)) ?? {};

    const userNavigations = [
        {
            id: "home",
            label: "Home",
            path: "/",
            icon: <House size={30} />
        },
        {
            id: "shorts",
            label: "Shorts",
            path: "/shorts",
            icon: <Youtube size={30} />
            
        },
        {
            id: "subscriptions",
            label: "Subscriptions",
            path: "/subscriptions",
            icon: <Package2 size={30} />
        },
        {
            id: "you",
            label: "You",
            path: "you",
            icon: <Avatar size='sm' src={youtubeLoggedinUser?.image} />
        },
    ];

    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <Box
            position='absolute'
            left={0}
            bottom={0}
            w='100%'
            minH='60px'
            bgColor='rgba(15, 15, 15, 0.7)'
            backdropFilter='blur(20px)'
            py={1}
        >
            <HStack 
                boxSize="full"
                color={"white"}
                justify="space-around"
                align="center"
            >
                {userNavigations.map(item => (
                    <VStack key={item.id} gap={1} onClick={() => handleClick(item.path)}>
                        <Box>{item.icon}</Box>
                        <Text flex={1}>{item.label}</Text>
                    </VStack>
                ))}
            </HStack>
        </Box>
    )
}

export default BottomBar