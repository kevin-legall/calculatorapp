import {CEngineResponse} from "../../Domain/Response/Models/CEngineResponse";
import {Expression} from "../../../features/calculation/core/models/Expression";
import {ToucheViewModel} from "../../../features/calculation/keypad/models/ToucheViewModel";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {SettingsState} from "../../../shared/types/states/SettingsState";

export interface ICEngineFacade {
    manage(touche: ToucheViewModel, calculatorState: CalculatorState, settings: SettingsState): CEngineResponse;

    evaluate(expression: Expression): string;
}