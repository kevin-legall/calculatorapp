import {ICommand} from "../Commands/ICommand";
import {ToucheViewModel} from "../../../features/calculation/keypad/models/ToucheViewModel";
import {Expression} from "../../../features/calculation/core/models/Expression";
import {SettingsState} from "../../../shared/types/states/SettingsState";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export interface ICalculatorActionFactory {
    create(touche: ToucheViewModel, state: CalculatorState, settings: SettingsState): ICommand | undefined;
}