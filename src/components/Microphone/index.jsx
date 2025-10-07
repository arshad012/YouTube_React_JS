import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { HiMiniMicrophone } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

import { toggleIsListening } from "../../Redux/SearchRecognition/slice";
import { useSelector, useDispatch } from "react-redux";
import { SearchRecognitionSelector } from "../../Redux/SearchRecognition/selector";
import { updateSearchQuery } from "../../Redux/SearchQuery/slice";
import { fetchData } from "../FetchData";
import { updateSearchedData } from "../../Redux/searchedData/slice";
import { useNavigate } from "react-router-dom";

function NavbarMicrophone() {
    const bgColor = useColorModeValue("#e8e3e2", "#303030");
    const textColor = useColorModeValue("black", "white");
    const menuHover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const menuActive = useColorModeValue("#c7c3c2ff", "#565353ff");

    const { isListening } = useSelector(SearchRecognitionSelector);
    const [recognition, setRecognition] = useState(null);
    const [voiceSearchQuery, setVoiceSearchQuery] = useState("");
    const isFirstRun = useRef(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const iconRef = useRef(null);

    useEffect(() => {
        if (!isListening && recognition) {
            recognition.stop();
            setRecognition(null);
        }
    }, [isListening]);


    useEffect(() => {
        if(isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        const searchData = async (searchQuery) => {
            if (!searchQuery) return;

            const result = await fetchData(searchQuery);
            if (result.success) {
                dispatch(updateSearchedData(result.data));
                isFirstRun.current = false;
                navigate("/");
            } else {
                alert('Something went wrong, please try again');
            }
        }

        searchData(voiceSearchQuery);
    }, [voiceSearchQuery]);

    const handleMicClick = () => {
        iconRef.current.blur();

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Your browser does not support voice recognition.");
            return;
        }

        const recog = new SpeechRecognition();
        recog.lang = "en-US";
        recog.interimResults = false;

        recog.onstart = () => {
            dispatch(toggleIsListening(true));
            console.log("Voice recognition started. Speak now...");
        };

        recog.onresult = (event) => {
            const transcript = event.results[0][0].transcript;

            dispatch(toggleIsListening(false));
            dispatch(updateSearchQuery(transcript));
            setVoiceSearchQuery(transcript);
        };

        recog.onerror = (event) => {
            console.error("Error occurred in recognition:", event.error);
            dispatch(toggleIsListening(false));
        };

        recog.onend = () => {
            console.log('Voice recongnition stopped');
            dispatch(toggleIsListening(false))
        };

        recog.start();
        setRecognition(recog);
    };

    return (
        <IconButton
            aria-label='microphone'
            color={textColor}
            icon={<HiMiniMicrophone size={22} />}
            borderRadius='full'
            // borderColor='#222222'
            // bg='#222222'
            // _hover={{ bg: '#434242ff' }}
            // _active={{ bg: '#565353ff' }}
            bg={{base: "transparent", sm: bgColor}}
            _hover={{base: { bg: "tranparent" }, sm: { bg: menuHover }}}
            _active={{base: { bg: "tranparent" }, sm: { bg: menuActive }}}
            onClick={handleMicClick}
            ref={iconRef}
        />
    )
}

export default NavbarMicrophone;