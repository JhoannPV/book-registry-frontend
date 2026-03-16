import { StyleGenre } from "../..";
import { Genre } from "../abstract-class-genre";

export class Mystery extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-gray-700", // Color de fondo gris oscuro
        textColor: "text-white", // Color de texto blanco
        borderColor: "border-gray-500", // Color de borde gris
    };

    constructor() {
        super("Mystery");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}