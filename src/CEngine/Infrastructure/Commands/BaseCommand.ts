import {SettingsState} from "../../../shared/types/states/SettingsState";
import {CalculatorState} from "../../../shared/types/states/CalculatorState";

export abstract class BaseCommand {
    private _state: CalculatorState;
    private _settings?: SettingsState;

    protected constructor(state: CalculatorState, settings?: SettingsState) {
        this._state = state;
        this._settings = settings;
    }

    get state(): CalculatorState {
        return this._state;
    }

    set state(value: CalculatorState) {
        this._state = value;
    }

    get settings(): SettingsState | undefined {
        return this._settings;
    }

    set settings(value: SettingsState | undefined) {
        this._settings = value;
    }
}