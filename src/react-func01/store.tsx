import { createContext, useReducer } from "react";
export const StoresContext = createContext({}) as any;
export const UPDATE_COLOR = "UPDATE";
export const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE":
			return action.value;
		default:
			return state;
	}
};
export const Stores = (props) => {
	const [value, dispatch] = useReducer(reducer, "red");
	return (
		<StoresContext.Provider value={{ value, dispatch }}>
			{props.children}
		</StoresContext.Provider>
	);
};
