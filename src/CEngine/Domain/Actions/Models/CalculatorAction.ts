import {ActionType} from "../Enums/ActionType";

export class CalculatorAction {
    constructor(private name: string, private type: ActionType) {
    }
}