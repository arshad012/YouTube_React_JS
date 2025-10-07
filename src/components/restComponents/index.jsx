import { useSelector } from "react-redux";
import VoiceSearch from "../VoiceSearch";
import { SearchRecognitionSelector } from "../../Redux/SearchRecognition/selector";

function RestComponents() {
    const { isListening } = useSelector(SearchRecognitionSelector);
    
    return (
        <div>
            {isListening && <VoiceSearch />}
        </div>
    )
}

export default RestComponents;