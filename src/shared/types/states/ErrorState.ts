import {Severity} from "../../models/Severity";

export type ErrorState = {
    errorMessage: string;
    errorCode: number;
    severity: Severity
}