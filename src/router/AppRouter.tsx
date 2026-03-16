import { Navigate, Route, Routes } from "react-router"
import { BookRegistryPage } from "../pages"
import { LiteraryGenrePage } from "../pages"
import { useLiteraryGenreStore } from "../hooks";

export const AppRouter = () => {
    const { literaryGenre, literaryGenreNames } = useLiteraryGenreStore();
    return (
        <>
            <Routes>
                <Route path="/" element={<BookRegistryPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/fiction" element={<LiteraryGenrePage genre={literaryGenre[0]} genreName={literaryGenreNames[0]} />} />
                <Route path="/non-fiction" element={<LiteraryGenrePage genre={literaryGenre[1]} genreName={literaryGenreNames[1]} />} />
                <Route path="/mystery" element={<LiteraryGenrePage genre={literaryGenre[2]} genreName={literaryGenreNames[2]} />} />
                <Route path="/fantasy" element={<LiteraryGenrePage genre={literaryGenre[3]} genreName={literaryGenreNames[3]} />} />
                <Route path="/science-fiction" element={<LiteraryGenrePage genre={literaryGenre[4]} genreName={literaryGenreNames[4]} />} />
                <Route path="/romance" element={<LiteraryGenrePage genre={literaryGenre[5]} genreName={literaryGenreNames[5]} />} />
                <Route path="/horror" element={<LiteraryGenrePage genre={literaryGenre[6]} genreName={literaryGenreNames[6]} />} />
            </Routes>
        </>
    )
}