import { BookForm, LiteraryGenres } from "../../components";
import { useLiteraryGenreStore } from "../../hooks";

export const BookRegistryPage = () => {
    const { literaryGenreNames, literaryGenre } = useLiteraryGenreStore();

    return (
        <div className="page-layout">
            <BookForm literaryGenreNames={literaryGenreNames} literaryGenre={literaryGenre} />
            <LiteraryGenres literaryGenreNames={literaryGenreNames} literaryGenre={literaryGenre} />
        </div>
    );
};