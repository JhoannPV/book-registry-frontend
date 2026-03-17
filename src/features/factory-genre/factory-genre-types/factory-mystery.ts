import { FactoryGenre, Mystery, MysteryEfect, } from "../..";

export class FactoryMystery extends FactoryGenre {
    createGenre() {
        return new Mystery();
    }
    createEfect() {
        return new MysteryEfect();
    }
}