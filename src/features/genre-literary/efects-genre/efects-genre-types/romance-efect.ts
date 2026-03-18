import { EfectsGenre, EfectsStyleGenre } from "../../..";

export class RomanceEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-rose-900",
        visualEffects: "bg-gradient-to-br from-rose-100 via-pink-200 to-fuchsia-200 bg-cover bg-no-repeat",
        buttonStyles: "bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg shadow-pink-400/40 hover:brightness-110 hover:scale-105 transition-all duration-300",
    };

    constructor() {
        super("Romance");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}