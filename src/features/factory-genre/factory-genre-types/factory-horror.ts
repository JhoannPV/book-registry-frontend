import { FactoryGenre, Horror, } from "../..";

export class FactoryHorror extends FactoryGenre {
    createGenre() {
        return new Horror();
    }
}