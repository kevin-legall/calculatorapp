import {BaseCommand} from "./BaseCommand";
import {ICommand} from "./ICommand";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {ExpressionHelper} from "../Helpers/ExpressionHelper";

export class VirguleCommand extends BaseCommand implements ICommand {
    private readonly _virgule: string;

    constructor(virgule: string, state: CalculatorState) {
        super(state);
        this._virgule = virgule;
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

    /*
    Rules pour ajouter un VirguleCommand :
        - Si le dernier char est un pourcentage, un exposant, une virgule, je n'ajoute rien
        - Si le dernier char est un opérateur, une parenthese je rajoute un zéro avant la virgule que j'ajoute
        - Si on est en ResultMode, je veux que l'expression devienne le result avant d'ajouter la virgule
        - Si une partie du calcul entre 2 opérateurs contient déja une virgule
     */
    processExpression(input?: string): string {
        let newInput = this.state.expression.value;
        let lastChar = newInput.slice(-1);
        if(lastChar === '%' || lastChar === ',' || lastChar === '%')
            return this.state.expression.value;
        if(lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/' || lastChar === '(')
            return newInput += `0${this._virgule}`
        if(this.settings?.isResultMode)
            newInput = this.state.result;
        if(!ExpressionHelper.canInsertComma(newInput))
            return this.state.expression.value;
        return newInput += this._virgule;
    }

    processResult(): string {
        let newResult = this.state.result;
        if(this.settings?.isResultMode)
            newResult = '0';
        return newResult;
    }
}