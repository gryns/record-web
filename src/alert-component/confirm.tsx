/*
 * @Descripttion: 询问框
 * @version:
 * @Author: gry
 * @Date: 2021-06-30 16:18:14
 * @LastEditors: gry
 * @LastEditTime: 2021-08-07 21:31:12
 */

export interface ConfirmProps {
	title?: string // 标题
	text: string // 内容
	okText?: string //确定文字
	cancelText?: string // 取消文字
	runCancel?: boolean //是否执行取消函数
	cancel?: () => void
	close?: () => void
	ok?: () => void
}

const ConfirmD = (props: ConfirmProps) => {
	const {
		title,
		text = "text",
		okText = "确定",
		cancelText = "取消",
		close,
		ok = () => {},
	} = props
	const _close = () => {
		close()
	}
	const _ok = () => {
		close()
		ok()
	}
	return (
		<div className="confirm-alert">
			<div className="confirm-text-mark mark-animate" onClick={_close}></div>
			<div className="confirm-content confirm-content-animate">
				<div className="confirm-content-text">
					{title && <p className="confirm-title">{title}</p>}
					<p className="confirm-text">{text}</p>
				</div>
				<div className="confirm-btn">
					<div className="confirm-btn-text" onClick={_close}>
						{cancelText}
					</div>
					<div className="confirm-btn-text" onClick={_ok}>
						{okText}
					</div>
				</div>
			</div>
		</div>
	)
}
export default ConfirmD
