import { EfectsGenre, EfectsStyleGenre } from "../..";

export class FictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-sky-950",
        visualEffects: "bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-300 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}