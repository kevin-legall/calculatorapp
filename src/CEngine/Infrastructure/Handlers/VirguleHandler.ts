import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {VirguleCommand} from "../Commands/VirguleCommand";

export class VirguleHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command instanceof VirguleCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}