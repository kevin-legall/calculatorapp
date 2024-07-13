import React, {useEffect, useState} from 'react';
import {Expression} from "../../core/models/Expression";
import {ErrorState} from "../../../../shared/types/states/ErrorState";
import {ExpressionHelper} from "../../../../CEngine/Infrastructure/Helpers/ExpressionHelper";
import {PrimaryInputComponent} from "./PrimaryInputComponent";

type ScreenComponentProps = {
    expression: Expression,
    result: string,
    isResultMode: boolean,
    errorState: ErrorState
}

export const ScreenComponent = ({ expression, result, isResultMode, errorState }: ScreenComponentProps) => {
    const parentheseCount = expression.parentheseCount;
    const [secondaryDisplay, setSecondaryDisplay] = useState(expression.value);
    const [primaryDisplay, setPrimaryDisplay] = useState(result);
    const [parentheses, setParentheses] = useState('');

    useEffect(() => {
        if(isResultMode){
            setSecondaryDisplay(expression.value);
            setPrimaryDisplay(result);
        } else {
            setSecondaryDisplay(result);
            setPrimaryDisplay(expression.value);
            setParentheses(')'.repeat(parentheseCount));
        }

    }, [parentheseCount, isResultMode, expression, result, parentheses]);

    return (
        <section className="screen-container">
            <h5>
                { errorState.errorMessage
                    ? <span style={{color: "red"}}>{errorState.errorMessage}</span> :
                    secondaryDisplay
                }
                <span></span>
            </h5>
            <PrimaryInputComponent input={primaryDisplay} parenthesesCount={parentheseCount} parentheses={parentheses} />
        </section>
    )
};