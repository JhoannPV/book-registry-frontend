import { EmptyGenre, FactoryGenre } from "../..";

export class FactoryEmptyGenre extends FactoryGenre {
    createGenre() {
        return new EmptyGenre();
    }
}