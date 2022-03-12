const home = {
	namespace: "home",
	state: {
		name: "yy",
	},
	reducers: {
		editName: (state, payload) => {
			return {
				...state,
				name: payload,
			}
		},
	},
}

export default home
