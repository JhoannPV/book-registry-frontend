import { EfectsGenre, EfectsStyleGenre } from "../..";

export class ScienceFictionEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-cyan-100",
        visualEffects: "bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Science Fiction");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}