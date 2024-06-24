export abstract class CalculatorException extends Error {
    private _message : string = "";

    constructor(message: string) {
        // TODO: faire la logique de mettre l'exception dans le dictionary à chaque construction
        super(message);
    }
}