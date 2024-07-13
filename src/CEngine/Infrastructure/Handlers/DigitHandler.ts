import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {DigitCommand} from "../Commands/DigitCommand";

export class DigitHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as DigitCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}