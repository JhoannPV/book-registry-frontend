import { EfectsGenre, EfectsStyleGenre } from "../..";

export class FantasyEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-violet-900",
        visualEffects: "bg-gradient-to-br from-violet-200 via-fuchsia-200 to-indigo-300 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Fantasy");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}