import { TRAER_PUBLICACIONES_USUARIO, CARGANDO, ERROR } from './types';

const initialState = {
  publicaciones: [],
  cargando: false,
  error: '',
  usuario: {},
};

const publicacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAER_PUBLICACIONES_USUARIO:
      return {
        ...state,
        publicaciones: action.payload.publicaciones,
        usuario: action.payload.usuario,
        error: '',
      };
    case CARGANDO:
      return {
        ...state,
        cargando: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default publicacionesReducer;
