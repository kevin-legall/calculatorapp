import {TypeTouche} from "./TypeTouche";

export class ToucheViewModel {
    private readonly _id: string;
    private _libelle: string;
    private _value: string;
    private _typeTouche: TypeTouche;
    private _style: string;

    constructor(id: string, libelle: string, value: string, typeTouche: TypeTouche, style: string) {
        this._id = id;
        this._libelle = libelle;
        this._value = value;
        this._typeTouche = typeTouche;
        this._style = style;
    }

    get id(): string {
        return this._id;
    }

    get libelle(): string {
        return this._libelle;
    }

    set libelle(value: string) {
        this._libelle = value;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get typeTouche(): TypeTouche {
        return this._typeTouche;
    }

    set typeTouche(value: TypeTouche) {
        this._typeTouche = value;
    }

    get style(): string {
        return this._style;
    }

    set style(value: string) {
        this._style = value;
    }
}