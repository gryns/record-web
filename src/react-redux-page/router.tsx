import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import stores from "../redux"
import Home from "./home"
import My from "./my"
export default function routes() {
	return (
		<Provider store={stores}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/my" component={My} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}
