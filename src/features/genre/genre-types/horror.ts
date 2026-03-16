import { StyleGenre } from "../..";
import { Genre } from "../abstract-class-genre";

export class Horror extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-black", // Color de fondo negro
        textColor: "text-red-500", // Color de texto rojo
        borderColor: "border-[#8b0000]", // Color de borde rojo oscuro
    };

    constructor() {
        super("Horror");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}