import { useEffect } from "react"

import { Alert, Confirm, debounce, Modal, ModalPage } from "./util"
import "./index.less"
const ReactApi = () => {
	useEffect(() => {
		console.log(Math.pow(44, 4))
		console.log(Math.pow(4, 44))
		console.log(Math.pow(4, 4))
		console.log(Math.pow(256, 4))
	}, [])

	const _click = debounce(() => {
		Alert({
			text: "tip",
		})
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
		</div>
	)
}
export default ReactApi
