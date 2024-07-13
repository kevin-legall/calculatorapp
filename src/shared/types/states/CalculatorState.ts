import {Expression} from "../../../features/calculation/core/models/Expression";
import {ErrorState} from "./ErrorState";
import {HistoryState} from "./HistoryState";

export type CalculatorState = {
    expression: Expression;
    result: string;
    errorState: ErrorState;
    historyState: HistoryState;
}