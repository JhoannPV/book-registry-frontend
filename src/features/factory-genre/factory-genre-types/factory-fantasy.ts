import { FactoryGenre, Fantasy } from "../..";

export class FactoryFantasy extends FactoryGenre {
    createGenre() {
        return new Fantasy();
    }
}