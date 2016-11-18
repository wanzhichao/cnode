import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import nodeReducer from '../reducers/nodeReducers'
const finalCreactStore = applyMiddleware(thunk)(createStore);
const store = finalCreactStore(nodeReducer);
export default store;