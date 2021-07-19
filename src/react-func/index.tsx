import React, { useState, useCallback } from "react";
import CalcNum from "./calc-num";
import Child from "./child";

const Parent = () => {
	const [name, setName] = useState("gry");
	const [child] = useState("parent-child");

	const editName = () => {
		setName("edit gry");
	};
	const editChildName = () => {
		setName("edit child gry");
	};
	return (
		<div>
			<p>{name}</p>
			<div onClick={editName}>更改parent name</div>
			{/* <div onClick={editChildName}>子调父方法修改name</div> */}
			<Child editChildName={useCallback(editChildName, [])} child={child} />
			<p>计算--性能</p>
			<CalcNum />
		</div>
	);
};
export default Parent;
