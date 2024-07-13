export class Expression {
    private _value: string;
    private _maxDigits: number;
    private _hasExposant: boolean;

    constructor() {
        this._value = "0";
        this._maxDigits = 15;
        this._hasExposant = false;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get maxDigits(): number {
        return this._maxDigits;
    }

    set maxDigits(value: number) {
        this._maxDigits = value;
    }

    get hasExposant(): boolean {
        return this._hasExposant;
    }

    set hasExposant(value: boolean) {
        this._hasExposant = value;
    }
}