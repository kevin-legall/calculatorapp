import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {SettingsState} from "../../../shared/types/states/SettingsState";

export class ParentheseCommand extends BaseCommand implements ICommand {
    private readonly _parenthese: string;
    private _parentheseCount: number;
    private _isExposantMode: boolean;

    constructor(parenthese: string, state: CalculatorState, settings: SettingsState) {
        super(state, settings);
        this._parenthese = parenthese;
        this._parentheseCount = state.expression.parentheseCount;
        this._isExposantMode = state.expression.isExposantMode;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.state.expression.value,
                parentheseCount: this._parentheseCount,
                isExposantMode: this._isExposantMode
            },
            result: this.processResult()
        };
    }

    /*
    Rules pour ajouter un ParentheseCommand :
        - ne peut pas ajouter une parenthese fermante s’il y a autant d'ouvrantes que de fermantes
     */
    processExpression(input?: string): string {
        let newInput = this.state.expression.value;
        console.log(this._parenthese)
        console.log(this.state.expression.isExposantMode)
        if(this._parenthese === '('){
            if(this.state.expression.isExposantMode)
                newInput += `<sup>`;
            this._parentheseCount++
        } else {
            this._parentheseCount--
            if(this.state.expression.isExposantMode) {
                newInput += this._parenthese;
                this._isExposantMode = false;
                return newInput += `</sup>`;
            }
            if(this.state.expression.parentheseCount === 0)
                return newInput;
        }
        return newInput += this._parenthese;
    }

    processResult(): string {
        return this.state.result;
    }
}