import { Book, BuilderBook } from "../..";

export class DirectorBuilderBook {
    createSimpleBook(bookName: string, category: string): Book {
        return new BuilderBook()
            .getTitle(bookName)
            .getGenre(category)
            .build();
    }
}