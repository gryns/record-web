/*
 * @Descripttion: 询问框
 * @version:
 * @Author: gry
 * @Date: 2021-06-30 16:18:14
 * @LastEditors: gry
 * @LastEditTime: 2022-03-08 22:22:41
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
	const _close = (): void => {
		close()
	}
	const _ok = () => {
		close()
		ok()
	}
	interface obj {
		<T>(key: string): T
	}
	// function identity<T>(arg: T): T {
	// 	return arg
	// }
	// function fn<T>(args: T): T {
	// 	return args
	// }
	// const fn1 = <T,>(name: T): T => {
	// 	return name
	// }
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
