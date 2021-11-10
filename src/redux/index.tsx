import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import createSaga from "redux-saga"
import change from "./reducers"
import names from "./reducers/name"
import saga from "./saga"
const createSagaMiddle = createSaga()
const combine = combineReducers({
	change,
	names,
})
const stores = createStore(
	combine,
	compose(
		applyMiddleware(createSagaMiddle),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__({})
	)
)
createSagaMiddle.run(saga)
export default stores
