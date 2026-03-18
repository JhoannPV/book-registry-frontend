import { FactoryGenre, Fiction, FictionEfect } from "../../..";

export class FactoryFiction extends FactoryGenre {
    createGenre() {
        return new Fiction();
    }
    createEfect() {
        return new FictionEfect();
    }
}