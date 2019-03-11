import PlaceReducer from './reducers/PlaceReducer';
import {combineReducers,createStore} from 'redux';


const rootReducer = combineReducers({
    reducer : PlaceReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;
