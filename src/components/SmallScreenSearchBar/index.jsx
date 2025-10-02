import { Search2Icon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightAddon, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuerySelector } from '../../Redux/SearchQuery/selector';
import { updateSearchQuery } from '../../Redux/SearchQuery/slice';
import { useNavigate } from 'react-router-dom';
import { updateSearchedData } from '../../Redux/searchedData/slice';

function SmallScreenSearchBar({ onClick }) {
    const bgColor = useColorModeValue("#e8e3e2", "#303030"); // #222222

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputFocus, setInputFocus] = useState(false);
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

        try {
            const API_KEY = `AIzaSyDaZJFVb6R2-Ek4RyMV8T7DJlwTrEyqlM0`;
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${API_KEY}`);
            const data = await response.json();

            onClick();
            navigate("/");
            dispatch(updateSearchedData(data));
        } catch (error) {
            console.log('error occured while fetching videos:', error);
        }
    }

    return (
        <InputGroup>
            <Input
                placeholder='Search'
                border='2px'
                borderRadius='full'
                value={searchQuery}
                ref={inputRef}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <InputRightAddon bg='inherit' borderRadius='0 50px 50px 0' px={0}>
                <IconButton
                    icon={<Search2Icon boxSize={4} />}
                    bg={bgColor}
                    px={4}
                    borderRadius='0 50px 50px 0'
                    onClick={searchData}
                />
            </InputRightAddon>
        </InputGroup>
    )
}

export default SmallScreenSearchBar;