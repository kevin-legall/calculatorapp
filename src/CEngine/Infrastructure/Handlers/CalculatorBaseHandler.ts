import {ICommand} from "../Commands/ICommand";
import {IHandler} from "./IHandler";

export abstract class CalculatorBaseHandler implements IHandler {
    private nextHandler?: IHandler;

    setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(command: ICommand) {
        if (this.nextHandler) {
            return this.nextHandler.handle(command);
        }
    }
}
