import {createSlice} from "@reduxjs/toolkit";
import {SettingsState} from "../types/states/SettingsState";

const initialState: SettingsState = {
    isStrictMode: false,
    isResultMode: false,
    isLightMode: true
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateIsStrictMode(state, {payload}) { state.isStrictMode = payload },
        updateIsResultMode(state, {payload}) { state.isResultMode = payload },
        updateIsLightMode(state, {payload}) { state.isLightMode = payload },
    }
});

export const {
    updateIsStrictMode,
    updateIsResultMode,
    updateIsLightMode
} = settingsSlice.actions;
export default settingsSlice.reducer;