import dav from "dvajs"
// import home from "./modal"
const app = dav()
const stores = app.model({
	namespace: "home",
	state: {
		name: "yy",
	},
})
export default stores
