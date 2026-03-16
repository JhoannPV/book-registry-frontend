import { StyleGenre } from "..";

export abstract class Genre {
    private genreName: string;
    constructor(genreName: string) {
        this.genreName = genreName;
    }
    public getGenreName(): string {
        return this.genreName;
    }
    abstract getStyles(): StyleGenre;
}