import { StyleGenre } from "../..";
import { Genre } from "../abstract-class-genre";

export class EmptyGenre extends Genre {
    public styles: StyleGenre = {
        backgroundColor: "",
        textColor: "",
        borderColor: "",
    };

    constructor() {
        super("");
    }

    getStyles(): StyleGenre {
        return this.styles;
    }
}