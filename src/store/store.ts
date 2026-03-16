import { configureStore } from '@reduxjs/toolkit';
import { literaryGenreSlice } from '.';

export const store = configureStore({
    reducer: {
        literaryGenre: literaryGenreSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

