const names = (state = {}, action) => {
	switch (action.type) {
		case "EDIT_NAME":
			return {
				...state,
				colors: action.name,
			}
		default:
			return state
	}
}
export default names
