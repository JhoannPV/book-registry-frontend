import { EfectsGenre, EfectsStyleGenre } from "../..";

export class NonFictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-stone-900",
        visualEffects: "bg-gradient-to-br from-stone-100 via-amber-100 to-zinc-200 bg-cover bg-no-repeat",
        buttonStyles: "bg-stone-800 text-amber-100 border border-stone-600 rounded-md px-5 py-2 font-medium tracking-wide hover:bg-stone-700 hover:border-amber-300 transition-all duration-300",
    };

    constructor() {
        super("Non-Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}