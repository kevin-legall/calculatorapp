import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {SettingsState} from "../../../shared/types/states/SettingsState";

export class DeleteCommand extends BaseCommand implements ICommand {
    private _parenthesesCount: number;
    constructor(state: CalculatorState, settings: SettingsState) {
        super(state, settings);
        this._parenthesesCount = state.expression.parentheseCount;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression(),
                parentheseCount: this._parenthesesCount
            },
            result: this.processResult()
        };
    }

    processExpression(input?: string): string {
        let newInput = this.state.expression.value.slice(0, -1);
        let toucheToDelete = this.state.expression.value.slice(-1);
        if(toucheToDelete === '(')
            this._parenthesesCount--;
        if(newInput === '')
            return '0';
        return newInput;
    }

    processResult(): string {
        if(this.settings?.isResultMode)
            return '0';
        return this.state.result;
    }
}