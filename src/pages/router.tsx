import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Stores } from "../react-func01/store";
import Home from "./home";
import My from "./my";
export default function routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Stores>
					<Route exact path="/" component={Home} />
					<Route exact path="/my" component={My} />
				</Stores>
			</Switch>
		</BrowserRouter>
	);
}
