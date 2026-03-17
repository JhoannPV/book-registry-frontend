import { EfectsStyleGenre } from "..";

export abstract class EfectsGenre {
    private efectGenreName: string;
    constructor(efectGenreName: string) {
        this.efectGenreName = efectGenreName;
    }
    public getGenreName(): string {
        return this.efectGenreName;
    }
    abstract getStyles(): EfectsStyleGenre;
}