import { useSelector } from "react-redux"
import type { RootState } from ".";

export const useLiteraryGenreStore = () => {
    const {
        literaryGenre,
        literaryGenreNames,
        arrayLiteraryGenre,
    } = useSelector((state: RootState) => state.literaryGenre);

    return {
        literaryGenre,
        literaryGenreNames,
        arrayLiteraryGenre,
    }
}