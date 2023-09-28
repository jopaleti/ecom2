import React, { useState, useEffect, useContext } from "react";
// import { contextApi } from "../../context/Context.js";
import { useSelector } from "react-redux";
import { Context } from "../../context/Context.js";
import Navbar from "../nav-bar/NavBar.js";
import {
	HomeNavbar,
	AdminNavbar,
	SellerNavbar,
	BuyerNavbar,
} from "../navbar/index.js";

function HandleNavbar() {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	return (
		<div>
			<Context>
				{!userInfo && <HomeNavbar />}
				{userInfo && userInfo.isAdmin && <AdminNavbar />}
				{userInfo && !userInfo.isAdmin && userInfo.isSeller && <SellerNavbar />}
				{userInfo && !userInfo.isAdmin && !userInfo.isSeller && userInfo && (
					<BuyerNavbar />
				)}
			</Context>

			{/* <Navbar>
				{!userInfo && <HomeNavbar />}
				{userInfo && userInfo.isAdmin && <AdminNavbar />}
			</Navbar> */}
			{/* <Context>
				<AdminNavbar />
				<BuyerNavbar />
			</Context> */}
		</div>
	);
}

export default HandleNavbar;
