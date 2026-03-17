import { EfectsGenre, EfectsStyleGenre } from "../..";

export class NonFictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-stone-900",
        visualEffects: "bg-gradient-to-br from-stone-100 via-amber-100 to-zinc-200 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Non-Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}