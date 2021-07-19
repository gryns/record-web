import React from "react";
import BoxBtn from "./box-btn";
import Box from "./box";
import { Stores } from "./store";
const Main = () => {
	return (
		<div>
			<p>main</p>
			<Stores>
				<BoxBtn />
				<Box />
			</Stores>
		</div>
	);
};
export default Main;
