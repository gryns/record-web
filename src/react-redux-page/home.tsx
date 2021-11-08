import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "antd-mobile"
import { connect } from "react-redux"
import * as globalAction from "../redux/actions"
import * as homeAction from "./homeAction"
const Home = function Home(props) {
	const { bgColor, list, homeName } = props.home
	const { editBgColor, getList, ediHometName } = props.dispatchHome
	const renderLi = () => {
		return list.map((item) => {
			return <li key={item.id}>{item.name}</li>
		})
	}

	return (
		<div>
			<h1 style={{ color: bgColor }}>home</h1>
			<Link to="/my">to my</Link>
			<h2 style={{ color: bgColor }}>修改 --{bgColor}</h2>
			<Button
				color="primary"
				onClick={() => {
					editBgColor("gray")
				}}
			>
				修改
			</Button>
			<h2 style={{ color: bgColor }}>修改 --{homeName}</h2>
			<Button
				color="primary"
				onClick={() => {
					ediHometName("mm")
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
			<Button
				color="primary"
				onClick={() => {
					getList()
				}}
			>
				获取歌词
			</Button>
			<h1 style={{ color: bgColor }}>歌曲</h1>
			<ul>{renderLi()}</ul>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		home: {
			...state.home,
			...state.homeReducer,
		},
	}
}

const mapDispatchToProps = (dispatch) => {
	const keys = Object.keys(globalAction)
	let actions = {}
	for (let i = 0; i < keys.length; i++) {
		actions[keys[i]] = (state) => dispatch(globalAction[keys[i]](state))
	}
	return {
		dispatchHome: {
			...actions,
			ediHometName: (state) => dispatch(homeAction.ediHometName(state)),
		},
	}
	// return {
	// 	dispatchHome: {
	// 		editBgColor: () => dispatch(homeAction.editBgColor()),
	// 		getList: () => dispatch(homeAction.getList()),
	// 	},
	// }
}

// const mapAction = (dispatch) => {
// 	const keys = (homeAction as any).keys()
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
