import React from 'react';
import {ScreenComponent} from "../../screen/components/ScreenComponent";
import {useAppSelector} from "../../../../shared/hooks/useAppSelector";
import {KeypadComponent} from "../../keypad/components/KeypadComponent";

export const CalculatorComponent = () => {
    const calculatorState = useAppSelector((state)=> state.calculator)

    return (
        <>
            <ScreenComponent result={calculatorState.result} expression={calculatorState.expression}></ScreenComponent>
            <KeypadComponent></KeypadComponent>
        </>
    );
};
