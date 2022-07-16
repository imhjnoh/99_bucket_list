import {createStore, combineReducers, applyMiddleware} from "redux"
import bucket from "./modules/bucket"
import thunk from "redux-thunk"

const middlewares = [thunk];
const rootReducer = combineReducers({bucket}) // 여러개면 그냥 {a, b} 이렇게 쓰면 됨
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer)
export default store;