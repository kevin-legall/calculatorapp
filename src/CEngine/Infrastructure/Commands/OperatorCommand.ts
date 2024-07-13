import {ICommand} from "./ICommand";
import {BaseCommand} from "./BaseCommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {SettingsState} from "../../../shared/types/states/SettingsState";

export class OperatorCommand extends BaseCommand implements ICommand {
    private readonly _operator: string;

    constructor(operator: string, state: CalculatorState, settings: SettingsState) {
        super(state, settings);
        this._operator = operator;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression(this._operator)
            },
            result: this.processResult()
        };
    }

    /*
    Rules pour ajouter un OperatorCommand :
    - ne doit pas se placer apres un autre operateur
    - si le dernier char est une virgule ou une parenthese ouverte, on la remplace
    - si on est en ResultMode, on ajoute l'operateur apres le result
     */
    processExpression(input:string): string {
        let newInput = this.state.expression.value;
        let lastChar = newInput.slice(-1);
        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === 'x')
            return newInput;
        else if(lastChar === ',' || lastChar === '(')
            return newInput.slice(0, -1) + input;

        if(this.settings?.isResultMode)
            newInput = this.state.result;
        newInput += input;
        return newInput
    }

    processResult(): string {
        let result = this.state.result;
        if(this.settings?.isResultMode)
            result = '0';
        return result;
    }
}