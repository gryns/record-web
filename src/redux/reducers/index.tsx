const GLOABL_COLOR = {
	color: "red",
}

const change = (state = { ...GLOABL_COLOR }, action) => {
	switch (action.type) {
		case "GLOBAL_COLOR":
			return {
				...state,
				colors: action.colors,
			}
		default:
			return state
	}
}
export default change
