import React, { useRef } from "react";
import "./aside.scss";
import { contextApi } from "../../context/Context";
import { useContext } from "react";

function Aside({ children }) {
	const { btnClose, setBtnClose } = useContext(contextApi);
	const close = useRef();
	return (
		<div className="mobile-navbar" ref={close}>
			<div className="closed" onClick={() => setBtnClose(!btnClose)}>
				<i className="fa fa-times" aria-hidden="true"></i>
			</div>
			{children}
		</div>
	);
}

export default Aside;
