import React, { useState, useMemo } from "react";
const CalcNum = () => {
	let [count, setCount] = useState(0);

	let addCount = () => {
		let num = 0;
		for (let i = 0; i < 10; i++) {
			num += i;
		}
		return num;
	};
	let result = useMemo(addCount, []);
	return (
		<div>
			<p>count:{count}</p>
			<div onClick={() => setCount(result + count)}>点击加count</div>
		</div>
	);
};
export default CalcNum;
