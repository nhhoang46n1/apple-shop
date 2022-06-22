import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./cart/reducer";
import ItemsReducer from "./products/reducer";


const rootReducer = combineReducers({
    Items: ItemsReducer,   
    Cart: CartReducer, 
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;