import {createSlice} from "@reduxjs/toolkit";
import {CalculatorState} from "../../../../shared/types/states/CalculatorState";

const initialState: CalculatorState = new CalculatorState();

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        getCalculator: (state, {payload}) => state = payload
    }
});

export const { getCalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;