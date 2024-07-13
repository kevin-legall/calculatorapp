import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {ExpressionHelper} from "../Helpers/ExpressionHelper";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export class EqualCommand extends BaseCommand implements ICommand {
    constructor(state: CalculatorState) {
        super(state);
    }

    /*
    Rules pour ajouter un EqualCommand :
    - le dernier char ne doit pas etre un operateur
    - si l'expression inclus une parenthese, vérifier que le compte des parenthèses est équilibré
    - l'expression doit inclure au moins un operateur
     */
    processExpression(): string {
        let newInput = this.state.expression.value;
        let lastChar = newInput.slice(-1);
        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === 'x')
            return "Erreur: le dernier char ne doit pas etre un operateur";
        if(newInput.includes('(') && this.state.expression.parentheseCount === 0)
            return "Erreur: si l'expression inclus une parenthese, vérifier que le compte des parenthèses est équilibré";
        if(!ExpressionHelper.includeOperator(newInput))
            return "Erreur: l'expression doit inclure au moins un operateur";
        return newInput;
    }

    execute() {
        return this.state = {
            ...this.state,
            expression: {
                ...this.state.expression,
                value: this.processExpression()
            },
            result: this.processResult()
        };
    }

    processResult(): string {
        return this.state.result;
    }

}