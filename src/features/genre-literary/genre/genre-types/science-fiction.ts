import { StyleGenre } from "../../..";
import { Genre } from "../abstract-class-genre";

export class ScienceFiction extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-blue-900", // Color de fondo azul oscuro
        textColor: "text-sky-300", // Color de texto azul cielo
        borderColor: "border-blue-600", // Color de borde azul acero
    };

    constructor() {
        super("Science Fiction");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}