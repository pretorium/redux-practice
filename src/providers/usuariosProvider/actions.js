import axios from 'axios';
import { TRAER_USUARIOS, CARGANDO, ERROR } from './types';

export const traerTodos = () => async (dispath) => {
  try {
    dispath({ type: CARGANDO, payload: true });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);

    dispath({ type: CARGANDO, payload: false });

    dispath({ type: TRAER_USUARIOS, payload: data });
  } catch (error) {
    console.log('Error:', error.message);

    dispath({ type: ERROR, payload: error.message });

    dispath({ type: CARGANDO, payload: false });
  }
};

export default traerTodos;
