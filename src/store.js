import { createStore, combineReducers, applyMiddleware } from "redux";
/* Importing the thunk middleware. */
import thunk from "redux-thunk"
/* Importing the `composeWithDevTools` function from the `redux-devtools-extension` package. */
import { composeWithDevTools } from "redux-devtools-extension"
import TodoReducer from "./reducers/TodoReducers";

/* It combines all the reducers into one. */
const reducer = combineReducers({
    // assigning reducers to the state
    Todo : TodoReducer
})


/* It sets the initial state of the store, Where all our data will lie */
const initialState = {

}

/* A list of middleware. */
const middleware = [thunk];

/* It creates a store. */
const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
)

export default store;