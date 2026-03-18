import { EfectsGenre, EmptyEfectGenre, EmptyGenre, FactoryGenre } from "../../..";

export class FactoryEmptyGenre extends FactoryGenre {
    createGenre() {
        return new EmptyGenre();
    }
    createEfect(): EfectsGenre {
        return new EmptyEfectGenre();
    }
}