import {ILocalStorageService} from "./ILocalStorageService";
import {LocalStorageException} from "../exceptions/LocalStorageException";

export class LocalStorageService implements ILocalStorageService{
    private readonly _localStorage: Storage;

    constructor() {
        this._localStorage = window.localStorage;
    }

    AddItem(key: string, value: any): void {
        if(!key || !value)
            throw new LocalStorageException("une erreur s'est produite lors de l'ajout d'un item");

        if(this._localStorage.getItem(key))
            throw new LocalStorageException(`Un item possédant la key ${key} existe déja`);

        this._localStorage.setItem(key, value);
    }

    GetItem(key: string): string | null {
        if(!key)
            throw new LocalStorageException("impossible de récupérer un item sans key");
        return this._localStorage.getItem(key);
    }

}