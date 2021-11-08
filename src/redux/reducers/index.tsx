const INIT_STATE = {
	bgColor: "#fe0000",
	list: [],
}
const test = (state = INIT_STATE, action: any) => {
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
export default test
