import { ArrowBackIcon, Search2Icon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightAddon, useColorModeValue, InputRightElement, Box, HStack, useColorMode } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuerySelector } from '../../Redux/SearchQuery/selector';
import { updateSearchQuery } from '../../Redux/SearchQuery/slice';
import { useNavigate } from 'react-router-dom';
import { updateSearchedData } from '../../Redux/searchedData/slice';
import { fetchData } from '../FetchData';
import NavbarMicrophone from '../Microphone';

function SmallScreenSearchBar({ onClick }) {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue("#ffffff", "#0f0f0f");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const { searchQuery } = useSelector(searchQuerySelector);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
        if (result.success) {
            dispatch(updateSearchedData(result.data));
            navigate("/");
        } else {
            alert('Something went wrong, please try again');
        }
    }

    return (
        <Box
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
        >
            <HStack boxSize="full" gap={0}>
                {/* First child */}
                <IconButton
                    icon={<ArrowBackIcon boxSize={5} />}
                    borderRadius='full'
                    bg='inherit'
                    _hover={{ bg: "" }}
                    _active={{ bg: "" }}
                    onClick={onClick}
                />

                {/* Second child */}
                <InputGroup>
                    <Input
                        placeholder='Search'
                        border='1px'
                        borderRadius='full'
                        value={searchQuery}
                        ref={inputRef}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <InputRightElement>
                        <IconButton
                            icon={<Search2Icon boxSize={4} />}
                            bg="inherit"
                            onClick={searchData}
                            _hover={{ bg: "" }}
                            _active={{ bg: "" }}
                        />
                    </InputRightElement>
                </InputGroup>

                {/* Third child */}
                <NavbarMicrophone />
            </HStack>
        </Box>
    )
}

export default SmallScreenSearchBar;