import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { bookRegistryApi } from "../api";
import Swal from "sweetalert2";
import { onCleanBooks, onLoadBooks } from "../store";
import { DataBook } from "../features";

export const useBook = () => {
    const dispatch = useDispatch();

    const registryBook = useCallback(async (dataBook: DataBook) => {
        try {
            await bookRegistryApi.post('/libros/register', dataBook);
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al registrar la obra en el servidor.',
            });
        }
    }, []);

    const getBooksByCategory = useCallback(async (category: string) => {
        try {
            const response = await bookRegistryApi.get(`/libros/get/${category}`);
            dispatch(onLoadBooks(response.data));
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al obtener las obras del servidor.',
            });
            return [];
        }
    }, [dispatch]);

    const cleanBooks = useCallback(() => {
        dispatch(onCleanBooks());
    }, [dispatch]);

    return {
        registryBook,
        getBooksByCategory,
        cleanBooks
    }
}