import { createStore, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk'; //Conecta el proyecto con la extensión del navegador
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Extensión del navegador
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))); //Sirve para hacer peticiones a la api/servidor

export default store;