import {CalculatorException} from "../../../shared/exceptions/CalculatorException";


export class NavbarException extends CalculatorException {
    public message : string = "";

    constructor(message: string) {
        super(message);
    }
}