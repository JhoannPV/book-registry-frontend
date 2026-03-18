import { StyleGenre } from "../../..";
import { Genre } from "../abstract-class-genre";

export class Romance extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-pink-100", // Color de fondo rosa claro
        textColor: "text-pink-500", // Color de texto rosa intenso
        borderColor: "border-pink-600", // Color de borde rosa oscuro
    };

    constructor() {
        super("Romance");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}