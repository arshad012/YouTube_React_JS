import { configureStore } from '@reduxjs/toolkit';

import searchQuerySlice from './SearchQuery/slice';
import YoutubeSidebarSlice from './YoutubeSidebar/slice';
import searchedDataSlice from './searchedData/slice';
import SearchRecognitionSlice from './SearchRecognition/slice';

export const Store = configureStore({
    reducer: {
        searchQuery: searchQuerySlice,
        sidebarState: YoutubeSidebarSlice,
        searchedData: searchedDataSlice,
        SearchRecognition: SearchRecognitionSlice
    }
})