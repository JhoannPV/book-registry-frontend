import { EfectsGenre, Genre } from "../..";

export abstract class FactoryGenre {
    abstract createGenre(): Genre;
    abstract createEfect(): EfectsGenre;
}