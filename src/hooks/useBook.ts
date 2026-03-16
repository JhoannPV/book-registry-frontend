import { Book } from ".";
import { bookRegistryApi } from "../api";
import Swal from "sweetalert2";

export const useBook = () => {

    const registryBook = async (bookName: string, category: string) => {
        try {
            await bookRegistryApi.post('/libros/register', { bookName, category });
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al registrar la obra en el servidor.',
            });
        }
    }

    const getBooksByCategory = async (category: string) => {
        try {
            const response = await bookRegistryApi.get(`/libros/get/${category}`);
            const payload = response.data as { books?: Book[] } | Book[];
            return Array.isArray(payload) ? payload : payload.books ?? [];
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al obtener las obras del servidor.',
            });
            return [];
        }
    }

    return {
        registryBook,
        getBooksByCategory
    }
}