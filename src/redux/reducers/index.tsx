const GLOABL_COLOR = {
	color: "red",
	list: [],
}

const change = (state = { ...GLOABL_COLOR }, action) => {
	switch (action.type) {
		case "GLOBAL_COLOR":
			return {
				...state,
				color: action.colors,
			}
		default:
			return state
	}
}
export default change
