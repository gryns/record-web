import React from "react"
import ReactDOM from "react-dom"
import "antd-mobile/es/global"
// import App from "./react-api"
// import App from "./react-redux-page/router"
import reportWebVitals from "./reportWebVitals"

import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import { reducer as apiReducer, middleware as apiMiddleware } from "redux-chunk"
interface Iobj {
	[key: string]: any
}
const Window: Iobj = window

const editColor = (val) => {
	return {
		type: "color",
		payload: val,
	}
}

const test = (state = { ...editColor }) => {
	return function (dispatch: any): void {
		dispatch(editColor)
	}
}
const combine = combineReducers({
	apiReducer,
	test,
})
const stores = createStore(
	combine,
	compose(
		applyMiddleware(apiMiddleware),
		Window.__REDUX_DEVTOOLS_EXTENSION__({})
	)
)
console.log(stores.getState())

ReactDOM.render(
	<React.StrictMode>
		<div>
			<div>react-redux</div>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
