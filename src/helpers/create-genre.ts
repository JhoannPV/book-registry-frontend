import { FactoryGenre, Genre } from "../features";

export const createGenre = (factory: FactoryGenre): Genre => {
    return factory.createGenre();
}