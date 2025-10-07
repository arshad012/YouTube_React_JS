import { createSlice } from "@reduxjs/toolkit";

const SearchRecognitionSlice = createSlice({
    name: "SearchRecognitionSlice",
    initialState: {
        isListening: false
    },
    reducers: {
        toggleIsListening: (state, { payload }) => {
            if(payload !== null || payload !== undefined) {
                state.isListening = payload;
            } else {
                state.isListening = !state.isListening;
            }
        }
    }
});

export const { toggleIsListening } = SearchRecognitionSlice.actions;
export default SearchRecognitionSlice.reducer;