import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {PercentageCommand} from "../Commands/PercentageCommand";

export class PercentageHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as PercentageCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}