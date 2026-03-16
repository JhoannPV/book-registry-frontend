import { Genre } from "..";

export abstract class FactoryGenre {
    abstract createGenre(): Genre;
}