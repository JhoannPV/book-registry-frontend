import { FactoryGenre, Fiction } from "../..";

export class FactoryFiction extends FactoryGenre {
    createGenre() {
        return new Fiction();
    }
}