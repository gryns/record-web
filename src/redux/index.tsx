import { combineReducers, createStore } from "redux"
import "redux-chunk"
import change from "./reducers"
import names from "./reducers/name"
const home = function (state = { homeColor: false }, action) {
	switch (action.type) {
		case "homeColor":
			return {
				...state,
				homeColor: action.homeColor,
			}
		default:
			return state
	}
}
const combine = combineReducers({
	change,
	names,
	home,
})
const stores = createStore(combine)
export default stores
