import { createStore,combineReducers} from 'redux';
import products from './product.reducer'

const reducer=combineReducers({products})
const store = createStore(reducer);
window.store = store;
export default store;