import React from "react";
export interface ModalPageProps {
	title?: string; // 标题
	text: string; // 内容
	okText?: string; //确定文字
	cancelText?: string; // 取消文字
	close?: () => void;
	ok?: () => void;
}
const ModalPage = (props: ModalPageProps) => {
	const { title = "标题", close } = props;
	const _close = () => {
		close();
	};

	return (
		<div className="modal-page-alert">
			<div className="modal-page-text-mark mark-animate" onClick={_close}></div>
			<div className="modal-page-content confirm-content-animate">
				<div className="modal-page-content-text">
					<p className="modal-page-title">{title}</p>
					<div className="close-btn" onClick={_close}></div>
				</div>
			</div>
		</div>
	);
};
export default ModalPage;
