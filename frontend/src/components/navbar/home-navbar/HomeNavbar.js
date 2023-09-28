import React, { useContext } from "react";
import "./home-navbar.scss";
import { Link } from "react-router-dom";
import Navbar from "../../nav-bar/NavBar";
import Aside from "../../aside/Aside";
import { contextApi } from "../../../context/Context";

export function MobileHomeNavbar() {
	const { btnClose } = useContext(contextApi);
	return (
		<>
			{btnClose && (
				<Aside>
					<aside className="aside-nav">
						<a href="/signin">
							<h1>Sign in</h1>
						</a>
						<a href="/modal">
							<h1>Register</h1>
						</a>
					</aside>
				</Aside>
			)}
		</>
	);
}

export function HomeNavbar() {
	return (
		<Navbar>
			<div className="flex_item2">
				<Link to="/signin">
					<h6 className="homeSign">Sign in</h6>
				</Link>
				<Link to="/modal">
					<h6 className="homeReg">Register</h6>
				</Link>
			</div>
		</Navbar>
	);
}
