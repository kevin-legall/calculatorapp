import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {ParentheseCommand} from "./ParentheseCommand";
import {SettingsState} from "../../../shared/types/states/SettingsState";

export class PuissanceCommand extends BaseCommand implements ICommand {
    private isExposantMode: boolean;
    private parenthesesCount: number;

    constructor(hasExposant: boolean, state: CalculatorState, settings: SettingsState) {
        super(state, settings);
        this.isExposantMode = hasExposant;
        this.parenthesesCount = state.expression.parentheseCount;
    }

    /*
    Rules pour ajouter un PuissanceCommand :
        - avoir un digit en dernier char
     */
    processExpression(input: string): string {
        let lastChar = input.slice(-1);
        const num = Number(lastChar);
        let stateUpdated: CalculatorState;
        if(!isNaN(num) && num >= 0 && num <= 9 && this.state && this.settings) {
            if(this.isExposantMode) {
                let newState = this.updateStateByIsExposantMode(false);
                let command = new ParentheseCommand(')', newState, this.settings);
                stateUpdated = command.execute();
            } else {
                let newState = this.updateStateByIsExposantMode(true);
                let command = new ParentheseCommand('(', newState, this.settings);
                stateUpdated = command.execute();
            }
            this.parenthesesCount = stateUpdated.expression.parentheseCount;
            return stateUpdated.expression.value;
        }
        return input;
    }

    execute(): CalculatorState {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.state.expression.value,
                isExposantMode: this.isExposantMode,
                parentheseCount: this.parenthesesCount
            },
            result: this.processResult()
        };
    }

    updateStateByIsExposantMode(isExposantMode: boolean): CalculatorState {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                isExposantMode: isExposantMode,
            },
            result: this.processResult()
        };
    }

    processResult(): string {
        return this.state.result;
    }

}