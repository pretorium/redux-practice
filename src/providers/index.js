import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import usuariosReducer from './usuariosProvider/reducers';
import publicacionesReducer from './publicacionesProvider/reducers';
import { setLocalStorage, getLocalStorage } from '../utils/cookie';

const reducers = combineReducers({
  usuariosReducer,
  publicacionesReducer,
});

const store = createStore(
  reducers, // Los reducers
  getLocalStorage('storeState') ? JSON.parse(getLocalStorage('storeState')) : {}, // Estado inicial
  applyMiddleware(reduxThunk),
);

store.subscribe(() => {
  const storeState = store.getState();
  if (JSON.stringify(storeState) !== JSON.stringify(getLocalStorage('storeState'))) {
    setLocalStorage('storeState', JSON.stringify({ ...storeState }), 3600000);
  }
});

export default store;
