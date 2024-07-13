import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export interface ICommand {
    execute(): CalculatorState;
    processExpression(input?: string): string;
    processResult(): string;
}