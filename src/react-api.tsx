import React, { useEffect, useState } from "react"

import { Alert, Confirm, debounce, Modal, ModalPage } from "./util"
import "./index.less"
const ReactApi = () => {
	const [value, setValue] = useState("")
	const [num, setNum] = useState("")
	const [code, setCode] = useState(null) as any
	let refs = React.createRef() as any
	useEffect(() => {}, [])
	const _click = debounce(() => {
		Alert({})
	})
	const _confirm = debounce(() => {
		Confirm({
			title: "title",
			text: "confirm",
		})
	})
	const _modal = debounce(() => {
		Modal({
			title: "modal",
			text: "confirm",
			otherDom: renderDiv(),
		})
	})

	const clearValue = () => {
		refs.current.innerHTML = ""
		console.log(refs)
	}
	const sortFn = (a, b) => {
		return b - a
	}

	useEffect(() => {
		let arr = [23, 11, 33, 44, 1]
		arr = arr.slice(1, 2)
		console.log(arr)
		const reg = /^\d{4}@[a-z0-9]{2,3}\.com$/
		new Promise((resolve, reject) => {
			console.log("promise")
			resolve("0")
		}).then(() => {
			console.log("promise then")
		})
		fn()
		return () => {}
	}, [])

	const fn = async () => {
		// 1 6 8 2 7 3 4 5
		console.log("start")
		const a = await b()
		console.log("end")
		console.log(a)
	}

	const b = () => {
		return "b"
	}

	const renderDiv = () => {
		return [1, 2, 3, 4, 5, 6].map((item) => {
			return (
				<div style={{ height: "50px", lineHeight: "60px" }} key={item}>
					{item}
				</div>
			)
		})
	}
	const _modalPage = debounce(() => {
		ModalPage({
			title: "modal",
			text: "confirm",
		})
	})
	return (
		<div>
			<p>react api</p>
			<div className="alert" onClick={_click}>
				点击alert
			</div>
			<div className="alert" onClick={_confirm}>
				点击confirm
			</div>
			<div className="alert" onClick={_modal}>
				点击modal
			</div>
			<div className="alert" onClick={_modalPage}>
				点击modal-page
			</div>
			<div className="input" style={{ margin: "15px" }}>
				<input
					ref={refs}
					type="tel"
					value={value}
					placeholder="number"
					pattern="^\d*(\.\d{0,2})?$"
					onKeyDown={(evt: any) => {
						setCode(
							`${evt.type} , ${evt.code}, ${evt.nativeEvent.code}, ${evt.nativeEvent.keyCode},${evt.key},${evt.nativeEvent.key}`
						)
						return (
							["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
						)
					}}
					// onKeyUp={(ev) => {
					// 	const arr = ["e", "-", "+"]
					// 	if (arr.includes(ev.key)) {
					// 		clearValue()
					// 		setValue("")
					// 		ev.preventDefault()
					// 	}
					// }}
					// onKeyPress={(ev) => {
					// 	Alert({
					// 		text: ev.key,
					// 	})
					// 	if (/^\d*(\.\d{0,2})?$/.test(ev.key)) {
					// 		return true
					// 	} else {
					// 		ev.preventDefault()
					// 	}
					// }}
					onChange={(e) => {
						const va = e.target.value
						const val = /^\d*(\.\d{0,2})?$/
						const v = e.target.value.replace(/(e-+)/g, "")
						if (val.test(va)) {
							setValue(v)
						}
					}}
					inputMode="decimal"
				/>
				<br />
				<input
					type="number"
					placeholder="tel"
					value={num}
					onChange={(e: any) => {
						const val = e.target.value
						const reg = /^\d*(\.\d{0,2})?$/
						if (reg.test(val)) {
							setNum(e.target.value)
							setCode(val)
						}
					}}
					maxLength={6}
				/>
				<p>{code}</p>
			</div>
		</div>
	)
}
export default ReactApi
