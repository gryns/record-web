export default function Home(
	state = {
		home: "gry",
	},
	action
) {
	return (dispatch) => {
		dispatch({
			type: "color",
			payload: "green",
		})
	}
}
