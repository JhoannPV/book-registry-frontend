import { Book, DataBook } from "../..";

export class BuilderBook {
    constructor(
        private dataBook: Partial<DataBook> = {}
    ) { }

    getTitle(bookName: string): this {
        this.dataBook.bookName = bookName;
        return this;
    }
    getGenre(category: string): this {
        this.dataBook.category = category;
        return this;
    }
    build(): Book {
        if (!this.dataBook.bookName || !this.dataBook.category) {
            throw new Error("Faltan datos obligatorios para construir el libro.");
        }

        return new Book(this.dataBook as DataBook);
    }
}