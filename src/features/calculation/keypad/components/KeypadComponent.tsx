import React from 'react';
import {touchesData} from "../../../../data/touchesData";
import {ToucheComponent} from "./ToucheComponent";
import {TypeTouche} from "../models/TypeTouche";
import {SwitchButtonComponent} from "./SwitchButtonComponent";
import {LocalStorageService} from "../../../../shared/services/LocalStorageService";
import {ToucheViewModel} from "../models/ToucheViewModel";
import {IKeypadManager} from "../managers/IKeypadManager";
import {CEngineResponse} from "../../../../CEngine/Domain/Response/Models/CEngineResponse";
import {ResponseStatus} from "../../../../CEngine/Domain/Response/Enums/ResponseStatus";
import {useAppDispatch} from "../../../../shared/hooks/useAppDispatch";
import {
    updateExpression,
    updateIsExposantMode,
    updateParentheseCount,
    updateResult
} from "../../core/slices/calculator.slice";
import {CalculatorState} from "../../../../shared/types/states/CalculatorState";
import {updateIsResultMode} from "../../../../shared/slices/settings.slice";
import {SettingsState} from "../../../../shared/types/states/SettingsState";

type KeypadComponentProps = {
    keypadManager: IKeypadManager,
    calculatorState: CalculatorState,
    settingsState: SettingsState
}

export const KeypadComponent = ({keypadManager, calculatorState, settingsState}: KeypadComponentProps) => {
    const touches = touchesData;
    const localStorageService = new LocalStorageService();
    const dispatch = useAppDispatch();

    const handleToucheClicked = (touche: ToucheViewModel) => {
        let response: CEngineResponse = keypadManager.handleKey(touche, calculatorState, settingsState);

        if(response.status === ResponseStatus.ERROR) {
            console.log('Error');
        } else {
            dispatch(updateExpression(response.newState?.expression));
            dispatch(updateParentheseCount(response.newState!.expression.parentheseCount));
            dispatch(updateIsExposantMode(response.newState!.expression.isExposantMode));
            dispatch(updateResult(response.newState?.result));

            // ATTENTION : ce if fait que si une expression donne 0, je ne mets pas à jour mon screen.
            // Il faut que ce soit la response renvoyé du CEngine qui donne l'info du resultMode pour éviter ce if
            if(response.newState?.result === '0') {
                dispatch(updateIsResultMode(false));
            } else {
                dispatch(updateIsResultMode(true));
            }
        }
    }

    return (
        <section className="calc-container">
            {
                touches && touches.map((touche)=>
                    touche.typeTouche === TypeTouche.SWITCHMODE ? (
                        <SwitchButtonComponent localStorageService={localStorageService} key={touche.id}></SwitchButtonComponent>
                        ) : (
                    <ToucheComponent onToucheClicked={handleToucheClicked} key={touche.id} touche={touche}></ToucheComponent>
                ))
            }
            <div id="hidden"></div>
        </section>
    );
};