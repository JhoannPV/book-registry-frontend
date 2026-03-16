import { FactoryGenre, Romance } from "../..";

export class FactoryRomance extends FactoryGenre {
    createGenre() {
        return new Romance();
    }
}