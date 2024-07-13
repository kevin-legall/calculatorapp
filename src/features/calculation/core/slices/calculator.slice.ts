import {createSlice} from "@reduxjs/toolkit";
import {CalculatorState} from "../../../../shared/types/states/CalculatorState";
import {Expression} from "../models/Expression";
import {ErrorState} from "../../../../shared/types/states/ErrorState";
import {Severity} from "../../../../shared/models/Severity";
import {HistoryState} from "../../../../shared/types/states/HistoryState";

const initialExpressionState: Expression = {
    value: '0',
    maxDigits: 15,
    isExposantMode: false,
    parentheseCount: 0
}

const initialErrorState: ErrorState = {
    errorCode: 0,
    errorMessage: "",
    severity: Severity.NONE
}

const initialHistoryState: HistoryState = {}

const initialState: CalculatorState = {
    expression: initialExpressionState,
    result: "0",
    errorState: initialErrorState,
    historyState: initialHistoryState,
}


export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        getCalculator: (state, { payload }) => {
            if (payload)
                return payload;
            return state;
        },
        updateExpression: (state, { payload }) => {
            state.expression = payload
        },
        updateParentheseCount: (state, { payload }) => {
            state.expression.parentheseCount = payload
        },
        updateIsExposantMode: (state, { payload }) => {
            state.expression.isExposantMode = payload
        },
        updateResult: (state, { payload }) => {
            state.result = payload
        },
    }
});

export const {
    getCalculator,
    updateExpression,
    updateParentheseCount,
    updateIsExposantMode,
    updateResult
} = calculatorSlice.actions;
export default calculatorSlice.reducer;