import { Box, Center, HStack, IconButton, Text, VStack, useColorModeValue, Spacer, CloseButton, grid } from "@chakra-ui/react";
import { HiMiniMicrophone } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleIsListening } from "../../Redux/SearchRecognition/slice";
import styles from "./voiceSearch.module.css";
import { useEffect } from "react";

function VoiceSearch() {
    const dispatch = useDispatch();
    const bgColor = useColorModeValue("#ffffff", "#222222");
    const Hover = useColorModeValue("#d8d4d3ff", "#434242ff");
    const Active = useColorModeValue("#c7c3c2ff", "#565353ff");

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (key.toLowerCase() === 'escape') {
                handleVoiceRecognitionStop();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    const handleVoiceRecognitionStop = () => {
        dispatch(toggleIsListening());
    }


    return (
        <Box
            position="absolute"
            width="100%"
            height="100vh"
            top={0}
            left={0}
            display='flex'
            justifyContent='center'
        >
            <Box
                position="absolute"
                width="100%"
                height="100vh"
                top={0}
                left={0}
                bgColor="rgba(0, 0, 0, 0.6)"
                zIndex={2000}
                onClick={handleVoiceRecognitionStop}
            />

            <VStack
                w={{ base: "100%", sm: "600px" }}
                h={{ base: "60vh", sm: "380px" }}
                // align="start"
                mt={{ base: 0, sm: 3 }}
                p={3}
                bgColor={bgColor}
                borderRadius={{ base: 0, sm: "md" }}
                zIndex={4000}
                onClick={() => console.log('Clicked on voice recognition window')}
            >
                <HStack justify="end" w="full">
                    <CloseButton
                        borderRadius="full"
                        _hover={{ base: { bg: "transparent" }, sm: { bg: Hover } }}
                        _active={{ base: { bg: "transparent" }, sm: { bg: Active } }}
                        onClick={handleVoiceRecognitionStop}
                        size={{base: "md", sm: "lg"}}
                    />
                </HStack>

                <Text fontSize="3xl" px={5} textAlign="left" w="full">Listening...</Text>

                <Spacer />

                <HStack justify="center" w="full" mb={5}>
                    <Box className={styles.pulse}>
                        <HiMiniMicrophone size={40} color="#ffffff" />
                    </Box>
                </HStack>

                <Text textAlign="center" w="full">Click outside or cross icon to close</Text>
            </VStack>
        </Box>
    )
}

export default VoiceSearch;

/*
<IconButton
    aria-label='searching-microphone'
    icon={<HiMiniMicrophone size={50} />}
    isRound={true}
    color={textColor}
    borderColor='#222222'
    bg='#222222'
    _hover={{ bg: '#434242ff' }}
    _active={{ bg: '#565353ff' }}
    bg={bgColor}
    _hover={{ bg: menuHover }}
    _active={{ bg: menuActive }}
    onClick={handleMicClick}
/>
 */