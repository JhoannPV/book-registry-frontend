import { StyleGenre } from "../../..";
import { Genre } from "../abstract-class-genre";

export class Fantasy extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-purple-300", // Color de fondo púrpura claro
        textColor: "text-purple-900", // Color de texto púrpura oscuro
        borderColor: "border-purple-700", // Color de borde púrpura oscuro
    };

    constructor() {
        super("Fantasy");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}