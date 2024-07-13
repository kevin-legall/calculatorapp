import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export class PercentageCommand extends BaseCommand implements ICommand {
    private readonly _percentage: string;

    constructor(percentage: string, state: CalculatorState) {
        super(state);
        this._percentage = percentage;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression()
            },
            result: this.processResult()
        };
    }

    /*
    Rules pour ajouter un PercentageCommand :
        - Ne pas avoir un operateur en dernier char
     */
    processExpression(input?: string): string {
        let newInput = this.state.expression.value;
        let operators = ['+', '-', 'x', '/', '%']
        let lastChar = newInput.slice(-1);
        if(operators.includes(lastChar))
            return this.state.expression.value;
        return newInput += this._percentage;
    }

    processResult(): string {
        return this.state.result;
    }
}