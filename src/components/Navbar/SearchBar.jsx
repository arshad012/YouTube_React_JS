const API_KEY = import.meta.env.VITE_API_KEY;
import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react"
import { SearchIcon, Search2Icon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { HiMiniMicrophone } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";

import { searchQuerySelector } from "../../Redux/SearchQuery/selector";
import { updateSearchQuery } from "../../Redux/SearchQuery/slice";
import { updateSearchedData } from "../../Redux/searchedData/slice";
import { useNavigate } from "react-router-dom";

import { searchedDataSelector } from "../../Redux/searchedData/selector";

function SearchBar() {
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
        
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${API_KEY}`);
            const data = await response.json();
            
            // navigate("/");
            dispatch(updateSearchedData(data));
        } catch (error) {
            console.log('error occured while fetching videos:', error);
        }
    }

    return (
        <Box w={{ base: '300px', sm: '500px', lg: '650px' }} h='full' color='white'>
            <Flex boxSize='full' alignItems='center' gap={{ sm: 2, md: 3, lg: 4 }}>
                <InputGroup>
                    {inputFocus &&
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                    }
                    <Input
                        placeholder='Search'
                        border='2px'
                        borderRadius='full'
                        borderColor='#303030'
                        value={searchQuery}
                        ref={inputRef}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <InputRightAddon bg='inherit' borderColor='#222222' borderRadius='0 50px 50px 0' px={0}>
                        <IconButton
                            aria-label='microphone'
                            color='white'
                            icon={<Search2Icon color='white' boxSize={5} />}
                            bg='#222222'
                            px={6}
                            borderColor='#222222'
                            borderRadius='0 50px 50px 0'
                            _hover={{ bg: '#222222' }}
                            onClick={searchData}
                        />
                    </InputRightAddon>
                </InputGroup>

                <Box>
                    <IconButton
                        aria-label='microphone'
                        color='white'
                        icon={<HiMiniMicrophone size={22} />}
                        borderRadius='full'
                        bg='#222222'
                        borderColor='#222222'
                        _hover={{ bg: '#434242ff' }}
                        _active={{ bg: '#565353ff' }}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default SearchBar