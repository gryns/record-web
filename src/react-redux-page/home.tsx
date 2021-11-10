import { Link } from "react-router-dom"
import { connect } from "react-redux"
const home = function (props) {
	console.log(props)

	return (
		<div>
			<p>home</p>
			<Link to="/my">to my</Link>
			<div onClick={() => {}}>edit color</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		home: { ...state },
	}
}
const homePage = connect(mapStateToProps)(home)
export default homePage
