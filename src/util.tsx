import React from "react";
import ReactDOM from "react-dom";
import AlertD, { AlertProps } from "./alert-component/alert";
import ConfirmD, { ConfirmProps } from "./alert-component/confirm";
import ModalD, { ModalProps } from "./alert-component/modal";
import ModalPageD, { ModalPageProps } from "./alert-component/modal-page";

const Alert = (params: AlertProps) => {
	const { div, close } = createDiv();
	ReactDOM.render(<AlertD {...params} close={close} />, div);
};

const Confirm = (params: ConfirmProps) => {
	const { div, close } = createDiv();
	ReactDOM.render(<ConfirmD {...params} close={close} />, div);
};

const Modal = (params: ModalProps) => {
	const { div, close } = createDiv();
	ReactDOM.render(<ModalD {...params} close={close} />, div);
};

const ModalPage = (params: ModalPageProps) => {
	const { div, close } = createDiv();
	ReactDOM.render(<ModalPageD {...params} close={close} />, div);
};

function createDiv() {
	let div = document.createElement("div");
	document.body.appendChild(div);

	// 关闭alert
	const close = () => {
		ReactDOM.unmountComponentAtNode(div);
		div.parentNode?.removeChild(div);
	};

	return { div, close };
}

const debounce = function (fn, wait = 300) {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		const timers = !timer;
		timer = setTimeout(() => {
			timer = null;
		}, wait);
		if (timers) fn.apply(this, args);
	};
};

export { Alert, debounce, Confirm, Modal, ModalPage };
