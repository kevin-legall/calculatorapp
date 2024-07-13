import {CalculatorState} from "../../../../shared/types/states/CalculatorState";
import {ResponseStatus} from "../Enums/ResponseStatus";

export class CEngineResponse {
    private _status: ResponseStatus;
    private _newState: CalculatorState | undefined;

    constructor(status: ResponseStatus, newState?: CalculatorState) {
        this._status = status;
        this._newState = newState;
    }

    get status(): ResponseStatus {
        return this._status;
    }

    set status(value: ResponseStatus) {
        this._status = value;
    }

    get newState(): CalculatorState | undefined {
        return this._newState;
    }

    set newState(value: CalculatorState | undefined) {
        this._newState = value;
    }
}