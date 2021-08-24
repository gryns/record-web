import { combineReducers, createStore } from "redux"
import change from "./reducers"
import names from "./reducers/name"
const combine = combineReducers({
	change,
	names,
})
const stores = createStore(combine)
export default stores
