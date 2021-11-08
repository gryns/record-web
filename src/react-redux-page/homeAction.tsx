export const ediHometName = (name = "") => {
	return (dispatch) => {
		dispatch({
			type: "homeName",
			payload: name,
		})
	}
}
