import { createSlice } from '@reduxjs/toolkit';
import { searchedDataInitialState } from './initialState';
import { youtubeSearchedData_key, clickedVideoDetails_key, watchHistory_localStorage_key } from '../../Utils';

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
            // adding video to watch-history
            const watchHistoryVideos = JSON.parse(sessionStorage.getItem(watchHistory_localStorage_key)) ?? [];
            watchHistoryVideos.push(payload);
            sessionStorage.setItem(watchHistory_localStorage_key, JSON.stringify(watchHistoryVideos));

            // adding video in sessionStorage to watch
            sessionStorage.setItem(clickedVideoDetails_key, JSON.stringify(payload));
            state.clickedVideoDetails = payload;
            state.watchHistory = watchHistoryVideos;
        }
    }
});

export const { updateSearchedData, updateClickedVideoDetails } = searchedDataSlice.actions;
export default searchedDataSlice.reducer;