import {IHandler} from "./Handlers/IHandler";
import {ICommand} from "./Commands/ICommand";
import {CEngineRessourceNotFoundException} from "../Exceptions/CEngineRessourceNotFoundException";
import {CalculatorState} from "../../shared/types/states/CalculatorState";

interface ICalculatorMediator {
    /*
        register an handler to the chain
     */
    registerHandler(handler: IHandler): void;

    getHandlers(): IHandler[];

    /*
        launch the chain of responsibility
     */
    send(command: ICommand | undefined): CalculatorState | undefined
}


export class CalculatorMediator implements ICalculatorMediator {
    private handlers: IHandler[] = [];

    registerHandler(handler: IHandler): void {
        this.handlers.push(handler);
    }

    getHandlers(){
        return this.handlers;
    }

    send(command: ICommand) {
        if (this.handlers.length > 0)
            return this.handlers[0].handle(command);
        else
            throw new CEngineRessourceNotFoundException("handlers not found");
    }
}