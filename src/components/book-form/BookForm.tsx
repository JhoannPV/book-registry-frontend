import { useState } from 'react';
import Swal from 'sweetalert2';
import './BookForm.css';
import { useBook } from '../../hooks';
import { DirectorBuilderBook } from '../../features';

export const BookForm = ({ literaryGenreNames, literaryGenre }: { literaryGenreNames: string[], literaryGenre: string[] }) => {
    const { registryBook } = useBook();

    const [formValues, setFormValues] = useState({
        bookName: '',
        category: literaryGenre[0] || ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formValues.bookName.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre de la obra no puede estar vacío.',
            });
            return;
        }

        const book = new DirectorBuilderBook().createSimpleBook(formValues.bookName, formValues.category);

        registryBook(book.dataBook);

        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Obra literaria registrada exitosamente.',
        });

        setFormValues({
            bookName: '',
            category: literaryGenre[0] || ''
        });
    };

    return (
        <div className="bookForm">
            <h2 className="bookFormTitle">Registro de Obras Literarias</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="bookName" className="bookFormLabel">Nombre de la Obra:</label>
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        value={formValues.bookName}
                        onChange={handleInputChange}
                        required
                        className="bookFormInput"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="bookFormLabel">Categoría:</label>
                    <select
                        id="category"
                        name="category"
                        value={formValues.category}
                        onChange={handleInputChange}
                        required
                        className="bookFormInput"
                    >
                        {literaryGenre.map((genre, index) => (
                            <option key={index} value={genre}>{literaryGenreNames[index]}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bookFormButton" onClick={handleSubmit}>Registrar</button>
            </form>
        </div>
    );
};