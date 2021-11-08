import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import chunk from "redux-thunk"

import home from "./reducers"
import homeReducer from "../react-redux-page/reducer"
const my = (state = { name: "my" }, action) => {
	if (action.name === "myName") {
		return {
			...state,
			name: action.payload,
		}
	}
	return state
}
const stores = createStore(
	combineReducers({
		home,
		my,
		homeReducer,
	}),
	compose(
		applyMiddleware(chunk),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__()
	)
)
export default stores
