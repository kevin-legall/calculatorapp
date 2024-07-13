import {ICommand} from "../Commands/ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(command: ICommand): CalculatorState | undefined;
}