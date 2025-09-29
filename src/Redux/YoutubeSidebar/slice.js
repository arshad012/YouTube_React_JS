import { createSlice } from '@reduxjs/toolkit';

const YoutubeSidebarSlice = createSlice({
    name: "YoutubeSidebarSlice",
    initialState: {
        isSidebarOpen: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
});

export const { toggleSidebar } = YoutubeSidebarSlice.actions;
export default YoutubeSidebarSlice.reducer;