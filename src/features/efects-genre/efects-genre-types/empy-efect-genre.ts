import { EfectsGenre, EfectsStyleGenre } from "../..";

export class EmptyEfectGenre extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "",
        color: "",
        visualEffects: "",
        buttonStyles: "",
    };

    constructor() {
        super("");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}