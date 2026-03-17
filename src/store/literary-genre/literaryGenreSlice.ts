import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../hooks';

const literaryGenre: string[] = [
    "fiction",
    "non-fiction",
    "mystery",
    "fantasy",
    "science-fiction",
    "romance",
    "horror"
];

const literaryGenreNames: string[] = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Fantasy",
    "Science Fiction",
    "Romance",
    "Horror"
];

export const literaryGenreSlice = createSlice({
    name: 'literaryGenre',
    initialState: {
        literaryGenre: literaryGenre,
        literaryGenreNames: literaryGenreNames,
        arrayLiteraryGenre: [] as Book[]
    },
    reducers: {
        onCleanBooks: (state) => {
            state.arrayLiteraryGenre = [] as Book[];
        },
        onLoadBooks: (state, { payload = [] }) => {
            console.log(payload);

            payload.forEach((book: Book) => {
                const exists = state.arrayLiteraryGenre.some(dbBook => dbBook.id === book.id);
                if (!exists) {
                    state.arrayLiteraryGenre.push(book);
                }
            });
        },
    }
});

export const { onLoadBooks, onCleanBooks } = literaryGenreSlice.actions;
