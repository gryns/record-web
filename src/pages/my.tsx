import React, { Component, useEffect, useState } from "react";
import { Confirm } from "../util";
export default class My extends Component {
	componentDidMount() {
		window.addEventListener("popstate", this.watchHistoryBack, false);
		window.history.pushState(null, null, document.URL);
	}
	componentWillUnmount() {
		window.removeEventListener("popstate", this.watchHistoryBack, false);
	}
	watchHistoryBack = () => {
		Confirm({
			text: "back",
			runCancel: false,
			cancel: () => {
				window.history.go(-1);
				return false;
			},
			ok: () => window.history.pushState(null, null, "#"),
		});
	};
	render() {
		return <div>my</div>;
	}
}
// export default function My() {
// 	const [backState, setBackState] = useState(false);
// 	useEffect(() => {
// 		window.addEventListener("popstate", watchHistoryBack, false);
// 		window.history.pushState(null, null, "#");
// 		return () => {
// 			window.removeEventListener("popstate", watchHistoryBack);
// 		};
// 	}, []);

// 	const watchHistoryBack = () => {
// 		if (backState) return;
// 		Confirm({
// 			text: "back",
// 			runCancel: false,
// 			cancel: () => {
// 				setBackState(true);
// 				window.history.go(-1);
// 			},
// 			ok: () => window.history.pushState(null, null, "#"),
// 		});
// 	};
// }
