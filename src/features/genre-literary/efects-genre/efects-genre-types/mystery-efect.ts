import { EfectsGenre, EfectsStyleGenre } from "../../..";

export class MysteryEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-slate-100",
        visualEffects: "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 bg-cover bg-no-repeat",
        buttonStyles: "bg-slate-900 text-slate-100 border border-indigo-400 rounded-lg px-5 py-2 font-semibold shadow-md shadow-indigo-950/60 hover:bg-indigo-950 hover:ring-2 hover:ring-indigo-300 transition-all duration-300",
    };

    constructor() {
        super("Mystery");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}