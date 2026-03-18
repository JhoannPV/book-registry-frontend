import { EfectsGenre, EfectsStyleGenre } from "../../..";

export class HorrorEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-red-200",
        visualEffects: "bg-gradient-to-br from-zinc-950 via-red-950 to-black bg-cover bg-no-repeat",
        buttonStyles: "bg-black text-red-200 border-2 border-red-700 rounded-md px-5 py-2 font-extrabold tracking-widest shadow-lg shadow-red-900/60 hover:bg-red-950 hover:border-red-500 hover:text-white transition-all duration-300",
    };

    constructor() {
        super("Horror");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}