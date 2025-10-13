import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

function You() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("#ffffff", "#0f0f0f");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");

    return (
        <Box
            w="100%"
            h="calc(100vh - 110px)"
            overflow="auto"
        >
            <Text
                mt={2}
                align="center"
            >Account adjustments can be done here</Text>

            <HStack justify="end" px={2}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        borderRadius='full'
                        bg='inherit'
                        _hover={{ bg: "" }}
                        icon={<SettingsIcon boxSize={5} />} 
                        boxShadow="md"
                    >Appearence</MenuButton>

                    <MenuList bg={bgColor} border='none'>
                        <MenuItem
                            onClick={toggleColorMode}
                            bg={bgColor}
                            _hover={{ bg: menuHover }}
                        >
                            {colorMode === "light" ? "Use dark mode" : "User light mode"}
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default You;