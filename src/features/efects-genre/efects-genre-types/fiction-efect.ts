import { EfectsGenre, EfectsStyleGenre } from "../..";

export class FictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-sky-950",
        visualEffects: "bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-300 bg-cover bg-no-repeat",
        buttonStyles: "bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg px-5 py-2 font-semibold shadow-md hover:from-sky-400 hover:to-blue-600 hover:-translate-y-0.5 transition-all duration-300",
    };

    constructor() {
        super("Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}