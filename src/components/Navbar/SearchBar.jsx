import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, useColorModeValue, useColorMode } from "@chakra-ui/react"
import { SearchIcon, Search2Icon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { searchQuerySelector } from "../../Redux/SearchQuery/selector";
import { updateSearchQuery } from "../../Redux/SearchQuery/slice";
import { updateSearchedData } from "../../Redux/searchedData/slice";
import { useNavigate } from "react-router-dom";
import { searchedDataSelector } from "../../Redux/searchedData/selector";
import NavbarMicrophone from "../Microphone";
import { fetchData } from "../FetchData";

function SearchBar() {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const textColor = useColorModeValue("black", "white");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const menuActive = useColorModeValue("#c7c3c2ff", "#565353ff");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchQuery } = useSelector(searchQuerySelector);
    const { videos } = useSelector(searchedDataSelector);
    const [inputFocus, setInputFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if(videos?.length <= 0) {
            inputRef.current.focus();
        }
    }, [])

    const handleChange = e => {
        const value = e.target.value;
        dispatch(updateSearchQuery(value));
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            searchData();
        }
    }

    const searchData = async () => {
        if (!searchQuery) return;

        const result = await fetchData(searchQuery);
        if(result.success) {
            dispatch(updateSearchedData(result.data));
            navigate("/");
            
        } else {
            alert('Something went wrong, please try again');
        }
    }
    
    return (
        <Box w={{ base: '300px', sm: '500px', lg: '650px' }} h='full' color={textColor}>
            <Flex boxSize='full' alignItems='center' gap={{ sm: 2, md: 3, lg: 4 }}>
                <InputGroup>
                    {inputFocus &&
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color={colorMode === "light" ? "black" : "gray.300"} />
                        </InputLeftElement>
                    }
                    <Input
                        placeholder='Search'
                        border='1px'
                        borderRadius='full'
                        borderColor={colorMode === "light" ? "gray.500" : "#303030"}
                        value={searchQuery}
                        ref={inputRef}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />

                    <InputRightAddon 
                        bg='inherit' 
                        borderRadius='0 50px 50px 0' 
                        px={0}
                    >
                        <IconButton
                            aria-label='Search2Icon'
                            icon={<Search2Icon color={textColor} boxSize={5} />}
                            borderRadius='0 50px 50px 0'
                            px={6}
                            bg={bgColor}
                            _hover={{ bg: menuHover }}
                            _active={{ bg: menuActive }}
                            onClick={searchData}
                        />
                    </InputRightAddon>
                </InputGroup>

                <Box>
                    <NavbarMicrophone />
                </Box>
            </Flex>
        </Box>
    )
}

export default SearchBar