import {ToucheViewModel} from "../../../features/calculation/keypad/models/ToucheViewModel";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import { evaluate } from 'mathjs';
import {SettingsState} from "../../../shared/types/states/SettingsState";
import {Expression} from "../../../features/calculation/core/models/Expression";
import {ICEngineFacade} from "./ICEngineFacade";
import {CalculatorMediator} from "../CalculatorMediator";
import {ICalculatorActionFactory} from "../Factories/ICalculatorActionFactory";
import {CEngineResponse} from "../../Domain/Response/Models/CEngineResponse";
import {ExpressionHelper} from "../Helpers/ExpressionHelper";
import {ResponseStatus} from "../../Domain/Response/Enums/ResponseStatus";

export class CEngineFacade implements ICEngineFacade {
    private readonly _mediator: CalculatorMediator;
    private readonly _factory: ICalculatorActionFactory;

    constructor(mediator: CalculatorMediator, factory: ICalculatorActionFactory) {
        this._mediator = mediator;
        this._factory = factory;
    }

    manage(touche: ToucheViewModel, calculatorState: CalculatorState, settings: SettingsState): CEngineResponse {
        let command = this._factory.create(touche, calculatorState, settings);

        if (!command)
            return new CEngineResponse(ResponseStatus.ERROR, calculatorState);

        let stateUpdated = this._mediator.send(command);

        if(!stateUpdated)
            return new CEngineResponse(ResponseStatus.ERROR, calculatorState);

        return new CEngineResponse(ResponseStatus.SUCCESS, stateUpdated);
    }

    evaluate(expression: Expression): string {
        try {
            let expressionUpdated = ExpressionHelper.prepareExpression(expression.value);
            console.log(`expression: ${expressionUpdated}`);
            let result = evaluate(expressionUpdated);
            console.log(`result: ${result}`);
            return ExpressionHelper.displayResult(result.toString());
        } catch (e) {
            let error=  e as Error;
            console.error('Erreur lors du calcul du résultat:', e)
            return error.message;
        }
    }
}