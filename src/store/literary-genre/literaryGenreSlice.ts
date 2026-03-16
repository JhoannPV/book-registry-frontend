import { createSlice } from '@reduxjs/toolkit';

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
    },
    reducers: {}
});
