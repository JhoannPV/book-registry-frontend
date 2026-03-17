import { FactoryGenre, Fantasy, FantasyEfect } from "../..";

export class FactoryFantasy extends FactoryGenre {
    createGenre() {
        return new Fantasy();
    }
    createEfect() {
        return new FantasyEfect();
    }
}