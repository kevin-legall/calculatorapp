import {CalculatorBaseHandler} from "./CalculatorBaseHandler";
import {ICommand} from "../Commands/ICommand";
import {PuissanceCommand} from "../Commands/PuissanceCommand";

export class PuissanceHandler extends CalculatorBaseHandler {
    handle(command: ICommand) {
        if (command as PuissanceCommand) {
            return command.execute();
        } else {
            super.handle(command);
        }
    }
}