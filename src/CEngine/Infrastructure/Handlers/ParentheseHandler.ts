import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {ParentheseCommand} from "../Commands/ParentheseCommand";

export class ParentheseHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command instanceof ParentheseCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}