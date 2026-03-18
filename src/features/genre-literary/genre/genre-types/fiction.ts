import { StyleGenre } from "../../..";
import { Genre } from "../abstract-class-genre";

export class Fiction extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "bg-blue-200", // Color de fondo azul claro
        textColor: "text-gray-800", // Color de texto gris oscuro
        borderColor: "border-blue-500", // Color de borde azul medio
    };

    constructor() {
        super("Fiction");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}