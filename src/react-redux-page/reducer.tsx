const INIT_STATE = {
	homeName: "yy",
}

const homeReducer = (state = INIT_STATE, action) => {
	let { type, payload } = action
	if (type in INIT_STATE) {
		type = "edit"
	}
	const types = action.type
	switch (type) {
		case "edit":
			return {
				...state,
				[types]: payload,
			}
	}
	return state
}
export default homeReducer
