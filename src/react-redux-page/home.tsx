import { Link } from "react-router-dom"
import { connect } from "react-redux"
const Home = function Home(props) {
	console.log(props)
	
	return (
		<div>
			<p>home</p>
			<Link to="/my">to my</Link>
			<div
				onClick={() => {
					props.dispatch({
						type: "GLOBAL_COLOR",
						colors: "green",
					})
				}}
			>
				edit color
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		value: state.change,
		home: state.home,
	}
}

export default connect(mapStateToProps)(Home)
