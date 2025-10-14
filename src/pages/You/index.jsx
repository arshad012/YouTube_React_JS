import { Box, Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { height } from "../../Utils";
import { useNavigate } from "react-router-dom";

function You() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const menuActive = useColorModeValue("#c7c3c2ff", "#565353ff");
    const navigate = useNavigate();

    return (
        <Box
            w="100%"
            h={height}
            overflow="auto"
        >
            {/* <Text
                mt={2}
                align="center"
            >Account adjustments can be done here</Text> */}
            <HStack justify="end" px={3}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        borderRadius='full'
                        bg='inherit'
                        _hover={{ bg: "" }}
                        _active={{ bg: menuActive }}
                        icon={<SettingsIcon boxSize={5} />} 
                    >Appearence</MenuButton>

                    <MenuList bg={bgColor} border='none'>
                        <MenuItem
                            onClick={toggleColorMode}
                            bg={bgColor}
                            _hover={{ bg: menuHover }}
                        >
                            {colorMode === "light" ? "Use dark mode" : "Use light mode"}
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>

            <VStack align="start" px={5}>
                <Button onClick={() => navigate("/watch-history")}>History</Button>
                <Button onClick={() => navigate("/watch-later")}>Watch later</Button>
            </VStack>
        </Box>
    )
}

export default You;