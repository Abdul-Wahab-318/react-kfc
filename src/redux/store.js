import {createStore ,combineReducers} from 'redux'
import {counterReducer} from './reducers/counterReducer'
import {productsReducer} from './reducers/productsReducer'

let allReducers = combineReducers({
    counterReducer,
    productsReducer
}) 

export const store = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


