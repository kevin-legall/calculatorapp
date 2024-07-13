import {IKeypadManager} from "./IKeypadManager";
import {ToucheViewModel} from "../models/ToucheViewModel";
import {KeyNotFoundException} from "../exceptions/KeyNotFoundException";
import {ICEngineFacade} from "../../../../CEngine/Infrastructure/Facade/ICEngineFacade";
import {CalculatorState} from "../../../../shared/types/states/CalculatorState";
import {CEngineResponse} from "../../../../CEngine/Domain/Response/Models/CEngineResponse";
import {SettingsState} from "../../../../shared/types/states/SettingsState";
import {TypeTouche} from "../models/TypeTouche";
import {ExpressionHelper} from "../../../../CEngine/Infrastructure/Helpers/ExpressionHelper";

export class KeypadManager implements IKeypadManager {
    private readonly _engine: ICEngineFacade;

    constructor(engine: ICEngineFacade) {
        this._engine = engine;
    }

    handleKey(touche: ToucheViewModel, calculatorState: CalculatorState, settings: SettingsState): CEngineResponse {
        if(!touche)
            throw new KeyNotFoundException("Touche introuvable ou n'existe pas");

        let response = this._engine.manage(touche, calculatorState, settings);

        if(response.newState) {
            if(touche.typeTouche === TypeTouche.EGAL && response.newState?.expression){
                let valueExpression = ExpressionHelper.handleParentheses(response.newState.expression.value, response.newState.expression.parentheseCount)
                let expression = response.newState.expression
                expression.value = valueExpression;
                response.newState.result = this._engine.evaluate(expression);
                response.newState.expression.parentheseCount = 0;
            }
            console.log(response.newState.expression)

            response.newState = {
                ...calculatorState,
                expression: response.newState.expression,
                result: response.newState.result
            };
        }
        return response;
    }
}