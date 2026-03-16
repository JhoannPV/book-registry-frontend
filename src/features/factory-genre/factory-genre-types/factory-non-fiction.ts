import { FactoryGenre, NonFiction } from "../..";

export class FactoryNonFiction extends FactoryGenre {
    createGenre() {
        return new NonFiction();
    }
}