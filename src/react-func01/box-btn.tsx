import { useContext } from "react";
import { StoresContext } from "./store";
const BoxBtn = () => {
	const { value } = useContext(StoresContext);
	return (
		<div>
			<p style={{ backgroundColor: value }}>box-btn</p>
		</div>
	);
};
export default BoxBtn;
