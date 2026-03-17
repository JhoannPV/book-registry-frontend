import { FactoryGenre, Horror, HorrorEfect, } from "../..";

export class FactoryHorror extends FactoryGenre {
    createGenre() {
        return new Horror();
    }
    createEfect() {
        return new HorrorEfect();
    }
}