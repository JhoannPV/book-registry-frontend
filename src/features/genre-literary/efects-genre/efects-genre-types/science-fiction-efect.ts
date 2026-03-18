import { EfectsGenre, EfectsStyleGenre } from "../../..";

export class ScienceFictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-cyan-100",
        visualEffects: "bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 bg-cover bg-no-repeat",
        buttonStyles: "bg-cyan-500/20 text-cyan-100 border border-cyan-300 rounded-xl px-5 py-2 font-bold uppercase tracking-[0.15em] shadow-[0_0_18px_rgba(34,211,238,0.45)] hover:bg-cyan-400/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.7)] transition-all duration-300",
    };

    constructor() {
        super("Science Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}