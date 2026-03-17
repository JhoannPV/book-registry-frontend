import { EfectsGenre, FactoryGenre, Genre } from "../features";

export const createGenre = (factory: FactoryGenre): (Genre | EfectsGenre)[] => {
    const genre = factory.createGenre();
    const visualEffects = factory.createEfect();
    return [genre, visualEffects];
}