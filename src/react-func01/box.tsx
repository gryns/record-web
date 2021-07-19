import React, { useContext } from "react";
import { StoresContext, UPDATE_COLOR } from "./store";
const BoxBtn = () => {
	const { dispatch } = useContext(StoresContext);
	return (
		<div>
			<p
				onClick={() => {
					dispatch({
						type: UPDATE_COLOR,
						value: "red",
					});
				}}
			>
				red
			</p>
			<p
				onClick={() => {
					dispatch({
						type: UPDATE_COLOR,
						value: "blue",
					});
				}}
			>
				blue
			</p>
		</div>
	);
};
export default BoxBtn;
