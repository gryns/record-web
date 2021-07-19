/*
 * @Descripttion: 提示框 & 自定义content内容
 * @version:
 * @Author: gry
 * @Date: 2021-07-02 16:15:00
 * @LastEditors: gry
 * @LastEditTime: 2021-07-09 16:09:21
 */

import React, { useEffect, ReactNode } from "react";

export interface ModalProps {
	title?: string;
	text: string; // 内容
	okText?: string; //确定文字
	close?: () => void;
	ok?: () => void;
	otherDom?: ReactNode;
}

const ModalD = (props: ModalProps) => {
	const {
		text = "text",
		title,
		okText = "确定",
		close,
		ok = () => {},
		otherDom,
	} = props;
	const otherStyle = otherDom ? "confirm-content-text-other" : "";
	useEffect(() => {}, []);
	const _close = () => {
		close();
	};
	const _ok = () => {
		close();
		ok();
	};
	return (
		<div className="confirm-alert">
			<div className="confirm-text-mark mark-animate" onClick={_close}></div>
			<div className="confirm-content confirm-content-animate-down">
				{title && <p className="modal-title">{title}</p>}
				<div className={`confirm-content-text ${otherStyle}`}>
					{otherDom ? otherDom : <p className="confirm-text">{text}</p>}
				</div>
				<div className="confirm-btn">
					<div className="confirm-btn-text modal-btn-text" onClick={_ok}>
						{okText}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ModalD;
