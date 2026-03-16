import { useNavigate } from 'react-router';
import './LiteraryGenres.css';

export const LiteraryGenres = ({ literaryGenre, literaryGenreNames }: { literaryGenre: string[], literaryGenreNames: string[] }) => {
    const nav = useNavigate();
    return (
        <div className="literaryGenres">
            <h2 className="literaryGenresTitle">Géneros Literarios</h2>
            <div className="space-y-4">
                {literaryGenre.map((genre, index) => (
                    <button key={index} className="literaryGenresButton" onClick={() => nav(`/${genre}`)}>
                        {literaryGenreNames[index]}
                    </button>
                ))}
            </div>
        </div>
    );
};