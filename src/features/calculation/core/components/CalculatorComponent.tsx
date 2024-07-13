import React from 'react';
import {ScreenComponent} from "../../screen/components/ScreenComponent";
import {useAppSelector} from "../../../../shared/hooks/useAppSelector";
import {KeypadComponent} from "../../keypad/components/KeypadComponent";
import {KeypadManager} from "../../keypad/managers/KeypadManager";
import {useEngine} from "../../../../shared/providers/EngineProvider";

export const CalculatorComponent = () => {
    const calculatorState = useAppSelector((state)=> state.calculator);
    const settings = useAppSelector((state)=> state.settings);
    const engine = useEngine();

    return (
        <>
            <ScreenComponent result={calculatorState.result} expression={calculatorState.expression} isResultMode={settings.isResultMode} errorState={calculatorState.errorState}></ScreenComponent>
            <KeypadComponent keypadManager={new KeypadManager(engine)} calculatorState={calculatorState} settingsState={settings}></KeypadComponent>
        </>
    );
};
