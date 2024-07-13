import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {DeleteCommand} from "../Commands/DeleteCommand";

export class DeleteHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as DeleteCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}