import {ToucheViewModel} from "../models/ToucheViewModel";
import {CalculatorState} from "../../../../shared/types/states/CalculatorState";
import {CEngineResponse} from "../../../../CEngine/Domain/Response/Models/CEngineResponse";
import {SettingsState} from "../../../../shared/types/states/SettingsState";

export interface IKeypadManager {

    /**
     * Gère l'appui d'une touche
     */
    handleKey(touche: ToucheViewModel, calculatorState: CalculatorState, settings: SettingsState): CEngineResponse
}