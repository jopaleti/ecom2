import React, { useState, useContext } from "react";
import "./seller-navbar.scss";
import { Link } from "react-router-dom";
import { signout } from "../../../actions/userActions";
import { useDispatch } from "react-redux";
import Navbar from "../../nav-bar/NavBar";
import { contextApi } from "../../../context/Context";
import Aside from "../../aside/Aside";

function dropdown(signoutHandler) {
	return (
		<div className="dropdown_container">
			<Link to="/">
				<h6>Settings</h6>
			</Link>
			<Link to="/">
				<h6>Refer & get up to $50</h6>
			</Link>
			<Link to="/">
				<h6>Help & Support</h6>
			</Link>
			<Link
				to="/"
				onClick={() => {
					signoutHandler();
				}}
			>
				<h6>Logout</h6>
			</Link>
		</div>
	);
}

export function MobileSellerNavbar() {
	const { btnClose } = useContext(contextApi);
	const dispatch = useDispatch();
	const [openDrop, setOpenDrop] = useState(false);
	const signoutHandler = () => {
		dispatch(signout());
	};
	return (
		<>
			{btnClose && (
				<Aside>
					<aside className="aside-admin-nav">
						<a href="/">
							<h1>Dashboard</h1>
						</a>
						<a href="/">
							<h1>Message</h1>
						</a>
						<a href="/">
							<h1>Orders</h1>
						</a>
						<a href="/">
							<h1>Buyer Requests</h1>
						</a>
						<a href="/">
							<h1>Analytics</h1>
						</a>
						<a href="/">
							<h1>Earnings</h1>
						</a>
						{/* Avatar Section */}
						<div
							className="avatar"
							onClick={() => {
								setOpenDrop((prevState) => !prevState);
							}}
						>
							<h1>Seller</h1>
							{/* <img src="" alt="" className="avatar_img" /> */}
							{openDrop && dropdown(signoutHandler)}
						</div>
					</aside>
				</Aside>
			)}
		</>
	);
}

export function SellerNavbar() {
	const dispatch = useDispatch();
	const [openDrop, setOpenDrop] = useState(false);
	const signoutHandler = () => {
		dispatch(signout());
	};
	return (
		<Navbar>
			<div className="sellerNav">
				<div className="flex_item2">
					<Link to="/">
						<h6>Dashboard</h6>
					</Link>
					<Link to="/">
						<h6>Message</h6>
					</Link>
					<Link to="/">
						<h6>Orders</h6>
					</Link>
					<Link to="/">
						<h6>Buyer requests</h6>
					</Link>
					<Link to="/">
						<h6>Analytics</h6>
					</Link>
					<Link to="/">
						<h6>Earnings</h6>
					</Link>
				</div>
				<div
					className="avatar"
					onClick={() => {
						setOpenDrop((prevState) => !prevState);
					}}
				>
					<h1>Seller image</h1>
					{/* <img src="" alt="" className="avatar_img" /> */}
					{openDrop && dropdown(signoutHandler)}
				</div>
			</div>
		</Navbar>
	);
}
