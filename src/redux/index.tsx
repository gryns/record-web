// import { combineReducers, createStore, applyMiddleware, compose } from "redux"
// import chunk from "redux-chunk"
// import { reducer } from "../react-func01/store"
// import index from "./reducers"
// import home from "./reducers/home"
// import names from "./reducers/name"
// interface Iobj {
// 	[key: string]: any
// }
// const Window: Iobj = window
// const GLOABL_COLOR = {
// 	color: "red",
// 	list: [],
// }

// const test = (state = { ...GLOABL_COLOR }, action) => {
// 	switch (action.type) {
// 		case "GLOBAL_COLOR":
// 			return {
// 				...state,
// 				color: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
// const postMsg = function (state = { postList: [] }, action) {
// 	return
// }
// // reducer
// const combine = combineReducers({
// 	index,
// 	names,
// 	home,
// })
// const composeEn = Window.____REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 	? Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// 	: compose
// const stores = createStore(test, composeEn(applyMiddleware(chunk)))

// export default stores
