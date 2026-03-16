import { useEffect, useState } from "react";
import { Genre, StyleGenre } from "../../features";
import { menuGenre } from "../../helpers";
import { Book, useBook } from "../../hooks";

export const LiteraryGenrePage = ({ genre, genreName }: { genre: string, genreName: string }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const { getBooksByCategory } = useBook();

    useEffect(() => {
        const fetchBooks = async () => {
            const fetchedBooks = await getBooksByCategory(genre);
            setBooks(fetchedBooks);
        };
        fetchBooks();
    }, []);

    const genreType: Genre = menuGenre(genre);
    const styles: StyleGenre = genreType.getStyles();

    return (
        <div className={`${styles.backgroundColor} h-screen w-screen font-sans flex flex-col`}>
            <h1 className={`text-center text-4xl font-extrabold ${styles.textColor} mt-8`}>
                Género Literario: {genreName}
            </h1>
            <p className={`text-center text-lg ${styles.textColor} mt-4`}>
                Aquí puedes encontrar obras literarias del género {genreName}.
            </p>
            <h2 className={`text-center text-2xl font-bold ${styles.textColor} uppercase mt-5 mb-2`}>
                Obras Registradas:
            </h2>
            <ul className="list-none p-0 m-0 max-w-3xl mx-auto flex flex-col gap-4 mt-6">
                {
                    books && books.length > 0 ?
                        books.map((book: Book) => (
                            <li key={book.id} className={`${styles.textColor} border ${styles.borderColor} rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105`}>
                                {book.bookName}
                            </li>
                        ))
                        :
                        <li className={`text-center ${styles.textColor}`}>
                            No hay obras registradas para este género.
                        </li>
                }
            </ul>
        </div>
    );
};