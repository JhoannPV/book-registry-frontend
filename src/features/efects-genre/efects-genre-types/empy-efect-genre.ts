import { EfectsGenre, EfectsStyleGenre } from "../..";

export class EmptyEfectGenre extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "",
        color: "",
        visualEffects: "",
    };

    constructor() {
        super("");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}