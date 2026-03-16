import { StyleGenre } from "../..";
import { Genre } from "../abstract-class-genre";

export class NonFiction extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-white", // Color de fondo blanco
        textColor: "text-black", // Color de texto negro
        borderColor: "border-gray-400", // Color de borde gris
    };

    constructor() {
        super("Non-Fiction");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}