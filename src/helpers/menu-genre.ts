import { createGenre } from ".";
import { FactoryEmptyGenre, FactoryFantasy, FactoryFiction, FactoryHorror, FactoryMystery, FactoryNonFiction, FactoryRomance, FactoryScienceFiction, Genre } from "../features";

export const menuGenre = (genre: string): Genre => {

    return genre === "fiction" ? createGenre(new FactoryFiction) :
        genre === "horror" ? createGenre(new FactoryHorror) :
            genre === "mystery" ? createGenre(new FactoryMystery) :
                genre === "non-fiction" ? createGenre(new FactoryNonFiction) :
                    genre === "romance" ? createGenre(new FactoryRomance) :
                        genre === "science-fiction" ? createGenre(new FactoryScienceFiction) :
                            genre === "fantasy" ? createGenre(new FactoryFantasy) :
                                createGenre(new FactoryEmptyGenre);
}