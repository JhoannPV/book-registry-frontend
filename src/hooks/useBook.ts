import { useDispatch } from "react-redux";
import { bookRegistryApi } from "../api";
import Swal from "sweetalert2";
import { onLoadBooks } from "../store";

export const useBook = () => {
    const dispatch = useDispatch();

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
            dispatch(onLoadBooks(response.data));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al obtener las obras del servidor.' + error,
            });
            return [];
        }
    }

    return {
        registryBook,
        getBooksByCategory
    }
}