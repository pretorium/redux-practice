import { TRAER_USUARIOS, CARGANDO, ERROR } from './types';

const initialState = {
  usuarios: [],
  cargando: false,
  error: '',
};

const usuariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAER_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
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

export default usuariosReducer;
