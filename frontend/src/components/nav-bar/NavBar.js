import React from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";
import Aside from "../aside/Aside";
import { contextApi } from "../../context/Context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context/Context.js";
import {
	MobileAdminNavbar,
	MobileBuyerNavbar,
	MobileHomeNavbar,
	MobileSellerNavbar,
} from "../navbar/index.js";

function Navbar({ children }) {
	// btnClose
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const { btnClose, setBtnClose } = useContext(contextApi);
	return (
		<div className="mainNavbar">
			{/* Mobile  SideNavbar components */}
			{!userInfo && <MobileHomeNavbar />}
			{userInfo && userInfo.isAdmin && <MobileAdminNavbar />}
			{userInfo && !userInfo.isAdmin && userInfo.isSeller && (
				<MobileSellerNavbar />
			)}
			{userInfo && !userInfo.isAdmin && !userInfo.isSeller && userInfo && (
				<MobileBuyerNavbar />
			)}
			<div className="mobile-nav">
				<div className="menu" onClick={() => setBtnClose(!btnClose)}>
					<i className="fa fa-bars" aria-hidden="true"></i>
				</div>
				<div className="logo">
					<Link to="/">
						<h6>LOGO</h6>
						{/* <img src="" alt="LOGO" /> */}
					</Link>
				</div>
			</div>
			<div className="main">
				<div className="container">
					<nav>
						<div className="nav_item_container">
							<div className="logo">
								<Link to="/">
									<h6>LOGO</h6>
									{/* <img src="" alt="LOGO" /> */}
								</Link>
							</div>
						</div>
						{children}
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
