import { FactoryGenre, Romance, RomanceEfect } from "../..";

export class FactoryRomance extends FactoryGenre {
    createGenre() {
        return new Romance();
    }
    createEfect() {
        return new RomanceEfect();
    }
}