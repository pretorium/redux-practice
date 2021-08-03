/* eslint-disable eqeqeq */
import axios from 'axios';
import { TRAER_PUBLICACIONES_USUARIO, CARGANDO, ERROR } from './types';

export const publicacionesPorUsuario = (id) => async (dispath) => {
  try {
    dispath({ type: CARGANDO, payload: true });

    const { data: usuarios } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);

    const usuario = usuarios.find((item) => (item.id == id));

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/posts?userId=${id}`);

    dispath({ type: CARGANDO, payload: false });

    dispath({ type: TRAER_PUBLICACIONES_USUARIO, payload: { publicaciones: data, usuario } });
  } catch (error) {
    console.log('Error:', error.message);

    dispath({ type: ERROR, payload: error.message });

    dispath({ type: CARGANDO, payload: false });
  }
};

export default publicacionesPorUsuario;
