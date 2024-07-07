import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        language: "hindi"
    },
    reducers: {
        setLang: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const { setLang } = configSlice.actions;
export default configSlice.reducer;