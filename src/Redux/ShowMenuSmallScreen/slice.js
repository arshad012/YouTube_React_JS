import { createSlice } from '@reduxjs/toolkit';

const ShowMenuSmallScreenSlice = createSlice({
    name: "ShowMenuSmallScreenSlice",
    initialState: {
        showMenu: false
    },
    reducers: {
        toggleShowMenu: (state) => {
            state.showMenu = !state.showMenu;
        }
    }
});

export const { toggleShowMenu } = ShowMenuSmallScreenSlice.actions;
export default ShowMenuSmallScreenSlice.reducer;