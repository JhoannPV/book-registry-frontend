import { FactoryGenre, ScienceFiction, ScienceFictionEfect } from "../../..";

export class FactoryScienceFiction extends FactoryGenre {
    createGenre() {
        return new ScienceFiction();
    }
    createEfect() {
        return new ScienceFictionEfect();
    }
}