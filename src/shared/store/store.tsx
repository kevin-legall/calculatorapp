import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "../../features/calculation/core/slices/calculator.slice";
import settingsReducer from "../slices/settings.slice";

export const store= configureStore({
    reducer: {
        calculator: calculatorReducer,
        settings: settingsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch