import {ICommand} from "./ICommand";
import {BaseCommand} from "./BaseCommand";
import {SettingsState} from "../../../shared/types/states/SettingsState";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {ExpressionHelper} from "../Helpers/ExpressionHelper";

export class DigitCommand extends BaseCommand implements ICommand {
    private readonly _digit: string;

    constructor(digit: string, state: CalculatorState, settings: SettingsState) {
        super(state, settings);
        this._digit = digit;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression(this._digit)
            },
            result: this.processResult()
        };
    }

    /*
    Rules pour ajouter un DigitCommand :
    - remplace l'expression si elle est egale à 0, sinon ajoute le digit
    - remplace l'expression si on est en resultMode
     */
    processExpression(input: string) {
        let newInput = this.state.expression.value;
        if(input === "Rand")
            input = ExpressionHelper.displayResult(Math.random().toFixed(4).toString());
        if(input.includes(',') && !ExpressionHelper.canInsertComma(newInput))
            return newInput;
        if(newInput === '0' || this.settings?.isResultMode)
            newInput = input;
        else
            newInput += input;

        return newInput
    }

    processResult() {
        let result = this.state.result;
        if(this.settings?.isResultMode)
            result = '0';
        return result;
    }
}