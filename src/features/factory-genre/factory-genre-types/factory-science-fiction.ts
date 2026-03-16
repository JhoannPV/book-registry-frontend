import { FactoryGenre, ScienceFiction } from "../..";

export class FactoryScienceFiction extends FactoryGenre {
    createGenre() {
        return new ScienceFiction();
    }
}