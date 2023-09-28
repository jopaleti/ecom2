import React, { useState, useContext } from "react";
import { createContext } from "react";

export const contextApi = createContext();

export const Context = (props) => {
	const [btnClose, setBtnClose] = useState(false);
	const [signIn, setSignIn] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [seller, setSeller] = useState(false);

	return (
		<contextApi.Provider
			value={{
				btnClose,
				setBtnClose,
				signIn,
				admin,
				seller,
				setSeller,
				setAdmin,
				setSignIn,
			}}
		>
			{props.children}
		</contextApi.Provider>
	);
};
