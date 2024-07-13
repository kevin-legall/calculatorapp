export class ScreenHelper {
    /**
     * Récupère le dernier caractère d’une chaine de caractère
     * @constructor
     */
    static GetLastChar(this: string): string | undefined {
        if(this && this.length > 0)
            return this.slice(0, -1);
    }
}