import { EfectsGenre, EfectsStyleGenre } from "../..";

export class HorrorEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-red-200",
        visualEffects: "bg-gradient-to-br from-zinc-950 via-red-950 to-black bg-cover bg-no-repeat",
    };

    constructor() {
        super("Horror");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}