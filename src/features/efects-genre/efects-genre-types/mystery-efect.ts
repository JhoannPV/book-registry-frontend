import { EfectsGenre, EfectsStyleGenre } from "../..";

export class MysteryEfect extends EfectsGenre {
    public styles: EfectsStyleGenre = {
        fontFamily: "font-serif",
        color: "text-slate-100",
        visualEffects: "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 bg-cover bg-no-repeat",
    };

    constructor() {
        super("Mystery");
    }

    getStyles(): EfectsStyleGenre {
        return this.styles;
    }
}