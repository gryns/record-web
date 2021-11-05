import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "antd-mobile"
import { connect } from "react-redux"
const Home = function Home(props) {
	const [list, setList] = useState([])
	useEffect(() => {
		// getSong()
	}, [])
	const getSong = () => {
		fetch("https://autumnfish.cn/personalized")
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				setList(res.result)
			})
	}
	const renderLi = () => {
		return list.map((item) => {
			return <li key={item.id}>{item.name}</li>
		})
	}
	const { color } = props.home
	return (
		<div>
			<p>home</p>
			<Link to="/my">to my</Link>
			<div>修改 --{color}</div>
			<Button
				color="primary"
				onClick={() => {
					props.dispatch({
						type: "GLOBAL_COLOR",
						payload: "green",
					})
				}}
			>
				修改
			</Button>
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
			<div
				onClick={() => {
					fetch("https://autumnfish.cn/personalized")
						.then((res) => {
							return res.json()
						})
						.then((res) => {
							props.dispatch({
								type: "LIST",
								list: res.result,
							})
						})
				}}
			>
				获取请求
			</div>
			<h1>歌曲</h1>
			<ul>{renderLi()}</ul>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		home: { ...state },
	}
}

export default connect(mapStateToProps)(Home)
