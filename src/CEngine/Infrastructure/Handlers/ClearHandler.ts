import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {ClearCommand} from "../Commands/ClearCommand";

export class ClearHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as ClearCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}