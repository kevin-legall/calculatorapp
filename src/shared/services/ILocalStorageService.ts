export interface ILocalStorageService {

    /**
     * Récupère un item dans le local storage selon une key
     * @param key
     * @constructor
     */
    GetItem(key: string): string | null;

    /**
     * Aoute un item dans le local storage
     * @param key
     * @param value
     * @constructor
     */
    AddItem(key: string, value: any): void;
}