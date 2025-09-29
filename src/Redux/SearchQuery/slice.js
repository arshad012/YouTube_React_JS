import { createSlice } from '@reduxjs/toolkit'

const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState: {
        searchQuery: sessionStorage.getItem('youtubeSearchQuery') ?? ""
    },
    reducers: {
        updateSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
            sessionStorage.setItem("youtubeSearchQuery", payload);
        }
    }
})

export const { updateSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;