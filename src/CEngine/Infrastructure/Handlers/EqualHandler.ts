import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {EqualCommand} from "../Commands/EqualCommand";

export class EqualHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as EqualCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}