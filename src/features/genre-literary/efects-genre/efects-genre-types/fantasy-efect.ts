import { EfectsGenre, EfectsStyleGenre } from "../../..";

export class FantasyEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-violet-900",
        visualEffects: "bg-gradient-to-br from-violet-200 via-fuchsia-200 to-indigo-300 bg-cover bg-no-repeat",
        buttonStyles: "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 text-white border border-violet-300 rounded-xl px-5 py-2 font-bold shadow-lg shadow-fuchsia-500/40 hover:scale-105 hover:shadow-fuchsia-400/60 transition-all duration-300"
    };

    constructor() {
        super("Fantasy");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}