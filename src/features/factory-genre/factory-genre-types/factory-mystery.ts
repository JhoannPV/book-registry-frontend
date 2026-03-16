import { FactoryGenre, Mystery, } from "../..";

export class FactoryMystery extends FactoryGenre {
    createGenre() {
        return new Mystery();
    }
}