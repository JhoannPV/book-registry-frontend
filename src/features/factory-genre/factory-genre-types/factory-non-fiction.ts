import { FactoryGenre, NonFiction, NonFictionEfect } from "../..";

export class FactoryNonFiction extends FactoryGenre {
    createGenre() {
        return new NonFiction();
    }
    createEfect() {
        return new NonFictionEfect();
    }
}