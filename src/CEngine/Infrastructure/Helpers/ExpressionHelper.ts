export class ExpressionHelper {
    static includeOperator(expression: string) {
        for(let char of expression){
            if(char === '+')
                return true;
            else if(char === '-')
                return true;
            else if(char === 'x')
                return true;
            else if(char === '/')
                return true;
        }
        return false;
    }
    static prepareExpression(expression: string) {
        let expressionUpdated: string[] = [];
        for(let char of expression) {
            if(char === 'x')
                expressionUpdated.push('*');
            else if(char === ',')
                expressionUpdated.push('.');
            else
                expressionUpdated.push(char);
        }
        return expressionUpdated.join('');
    }
    static handleParentheses(expression: string, parenthesesCount: number) {
        let expressionUpdated: string[] = [];
        for(let char of expression)
            expressionUpdated.push(char);
        for(let i = 0; i < parenthesesCount; i++)
            expressionUpdated.push(')');
        return expressionUpdated.join('');
    }
    static displayResult(result: string) {
        let resultUpdated: string[] = [];
        for(let char of result) {
            if(char === '*')
                resultUpdated.push('x');
            else if(char === '.')
                resultUpdated.push(',');
            else
                resultUpdated.push(char);
        }
        return resultUpdated.join('');
    }
    static canInsertComma(expression: string) {
        // on découpe l'expression en plusieurs segments comportant un opérateur
        let segments = expression.split(/[+\-x/]/);
        // Si le dernier segment a déja une virgule alors il faudra attendre le prochain opérateur pour en ajouter une
        return !segments[segments.length - 1].includes(',');

    }
}