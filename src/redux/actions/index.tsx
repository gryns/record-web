export const editBgColor = (color = "green") => {
	return (dispatch) => {
		dispatch({
			type: "bgColor",
			payload: color,
		})
	}
	// return {
	// 	type: "name",
	// 	payload: color,
	// }
}
export const getList = () => {
	return (dispach) => {
		fetch("https://autumnfish.cn/personalized")
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				dispach({
					type: "list",
					payload: res.result,
				})
			})
	}
}
