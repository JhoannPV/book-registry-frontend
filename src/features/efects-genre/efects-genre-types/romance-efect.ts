import { EfectsGenre, EfectsStyleGenre } from "../..";

export class RomanceEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-rose-900",
        visualEffects: "bg-gradient-to-br from-rose-100 via-pink-200 to-fuchsia-200 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Romance");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}