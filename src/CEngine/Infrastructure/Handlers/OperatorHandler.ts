import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {OperatorCommand} from "../Commands/OperatorCommand";

export class OperatorHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command instanceof OperatorCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}