import {Expression} from "../../../features/calculation/core/models/Expression";
import {ErrorState} from "./ErrorState";
import {HistoryState} from "./HistoryState";

export class CalculatorState {
    private _expression: Expression;
    private _result: string;
    private _errorState: ErrorState;
    private _historyState: HistoryState;

    constructor() {
        this._expression = new Expression();
        this._result = "0";
        this._errorState = new ErrorState();
        this._historyState = new HistoryState();
    }

    get expression(): Expression {
        return this._expression;
    }

    set expression(value: Expression) {
        this._expression = value;
    }

    get result(): string {
        return this._result;
    }

    set result(value: string) {
        this._result = value;
    }

    get errorState(): ErrorState {
        return this._errorState;
    }

    set errorState(value: ErrorState) {
        this._errorState = value;
    }

    get historyState(): HistoryState {
        return this._historyState;
    }

    set historyState(value: HistoryState) {
        this._historyState = value;
    }
}