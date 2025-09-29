import { createSlice } from '@reduxjs/toolkit';
import { searchedDataInitialState } from './initialState';
import { youtubeSearchedData_key, clickedVideoDetails_key } from '../../Utils';

const searchedDataSlice = createSlice({
    name: "searchedDataSlice",
    initialState: searchedDataInitialState(),
    reducers: {
        updateSearchedData: (state, { payload }) => {
            sessionStorage.setItem(youtubeSearchedData_key, JSON.stringify(payload));

            const { items, nextPageToken, pageInfo } = payload;
            state.videos = items;
            state.pageInfo = { ...pageInfo };
            state.nextPageToken = nextPageToken;
        },
        updateClickedVideoDetails: (state, { payload }) => {
            sessionStorage.setItem(clickedVideoDetails_key, JSON.stringify(payload));
            state.clickedVideoDetails = payload;
        }
    }
});

export const { updateSearchedData, updateClickedVideoDetails } = searchedDataSlice.actions;
export default searchedDataSlice.reducer;