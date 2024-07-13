import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export class ClearCommand extends BaseCommand implements ICommand {

    constructor(state: CalculatorState) {
        super(state);
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression(),
                isExposantMode: false,
                parentheseCount: 0
            },
            result: this.processResult()
        };
    }

    processExpression(): string {
        return "0";
    }

    processResult(): string {
        return "0";
    }
}