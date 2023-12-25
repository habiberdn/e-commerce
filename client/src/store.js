import { createStore } from 'redux';
import rootReducer from './component/redux/rootReducer';

const store = createStore(rootReducer);

export default store;