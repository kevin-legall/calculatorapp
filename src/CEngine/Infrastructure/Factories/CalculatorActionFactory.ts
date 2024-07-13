import {ICalculatorActionFactory} from "./ICalculatorActionFactory";
import {TypeTouche} from "../../../features/calculation/keypad/models/TypeTouche";
import {ICommand} from "../Commands/ICommand";
import {DigitCommand} from "../Commands/DigitCommand";
import {OperatorCommand} from "../Commands/OperatorCommand";
import {ToucheViewModel} from "../../../features/calculation/keypad/models/ToucheViewModel";
import {EqualCommand} from "../Commands/EqualCommand";
import {SettingsState} from "../../../shared/types/states/SettingsState";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";
import {ClearCommand} from "../Commands/ClearCommand";
import {DeleteCommand} from "../Commands/DeleteCommand";
import {PercentageCommand} from "../Commands/PercentageCommand";
import {VirguleCommand} from "../Commands/VirguleCommand";
import {PuissanceCommand} from "../Commands/PuissanceCommand";
import {ParentheseCommand} from "../Commands/ParentheseCommand";

export class CalculatorActionFactory implements ICalculatorActionFactory {
    private _keyMapping: Record<TypeTouche, ICommand | undefined> | undefined;

    private initMapping = (touche: ToucheViewModel, state: CalculatorState, settings: SettingsState) => {
        this._keyMapping = {
            [TypeTouche.CHIFFRE]: new DigitCommand(touche.value, state, settings),
            [TypeTouche.OPERATEUR]: new OperatorCommand(touche.value, state, settings),
            [TypeTouche.VIRGULE]: new VirguleCommand(touche.value, state),
            [TypeTouche.PARENTHESE]: new ParentheseCommand(touche.value, state, settings),
            [TypeTouche.PERCENTAGE]: new PercentageCommand(touche.value, state),
            [TypeTouche.PUISSANCE]: new PuissanceCommand(state.expression.isExposantMode, state, settings),
            [TypeTouche.PI]: new DigitCommand(touche.value, state, settings),
            [TypeTouche.RAND]: new DigitCommand(touche.value, state, settings),
            [TypeTouche.EGAL]: new EqualCommand(state),
            [TypeTouche.DELETE]: new DeleteCommand(state, settings),
            [TypeTouche.SWITCHMODE]: new OperatorCommand(touche.value, state, settings),
            [TypeTouche.CLEAR]: new ClearCommand(state),
            [TypeTouche.NONE]: undefined,
        }
    }

    create(touche: ToucheViewModel, state: CalculatorState, settings: SettingsState): ICommand | undefined {
        this.initMapping(touche, state, settings);
        if(this._keyMapping)
            return this._keyMapping[touche.typeTouche];
        else
            return undefined;
    }
}