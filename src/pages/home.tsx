import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoresContext, UPDATE_COLOR } from "../react-func01/store";
export default function Home() {
	const { dispatch } = useContext(StoresContext);
	return (
		<div>
			<p>home</p>
			<Link to="/my">to my</Link>
			<div
				onClick={() => {
					dispatch({
						type: UPDATE_COLOR,
						value: "blue",
					});
				}}
			>
				edit color
			</div>
		</div>
	);
}
