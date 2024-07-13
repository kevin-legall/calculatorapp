import {Severity} from "../../models/Severity";

export class ErrorState {
    private _errorMessage: string;
    private _errorCode: number;
    private _severity: Severity;

    constructor() {
        this._errorMessage = "";
        this._errorCode = 0;
        this._severity = Severity.NONE;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    set errorMessage(value: string) {
        this._errorMessage = value;
    }

    get errorCode(): number {
        return this._errorCode;
    }

    set errorCode(value: number) {
        this._errorCode = value;
    }

    get severity(): Severity {
        return this._severity;
    }

    set severity(value: Severity) {
        this._severity = value;
    }
}