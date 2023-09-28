import React, { useState, useContext } from "react";
import Navbar from "../../nav-bar/NavBar";
import { useDispatch } from "react-redux";
import "./admin-navbar.scss";
import { Link } from "react-router-dom";
import { signout } from "../../../actions/userActions";
import Aside from "../../aside/Aside";
import { contextApi } from "../../../context/Context";

const dropdown = (signoutHandler) => {
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
			<Link to="/" onClick={() => signoutHandler()}>
				<h6>Logout</h6>
			</Link>
		</div>
	);
};
export function MobileAdminNavbar() {
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
							<h1>Products</h1>
						</a>
						<a href="/">
							<h1>Orders</h1>
						</a>
						<a href="/">
							<h1>Users</h1>
						</a>
						<a href="/">
							<h1>Support</h1>
						</a>
						{/* Avatar Section */}
						<div
							className="avatar"
							onClick={() => {
								setOpenDrop((prevState) => !prevState);
							}}
						>
							<h1>Admin</h1>
							{/* <img src="" alt="" className="avatar_img" /> */}
							{openDrop && dropdown(signoutHandler)}
						</div>
					</aside>
				</Aside>
			)}
		</>
	);
}
export function AdminNavbar() {
	const dispatch = useDispatch();
	const [openDrop, setOpenDrop] = useState(false);
	const signoutHandler = () => {
		dispatch(signout());
	};

	return (
		<Navbar>
			<div className="adminNav">
				<div className="flex_item2">
					<Link to="/">
						<h6>Dashboard</h6>
					</Link>
					<Link to="/">
						<h6>Products</h6>
					</Link>
					<Link to="/">
						<h6>Orders</h6>
					</Link>
					<Link to="/">
						<h6>Users</h6>
					</Link>
					<Link to="/">
						<h6>Support</h6>
					</Link>
				</div>
				{/* Avatar Section */}
				<div
					className="avatar"
					onClick={() => {
						setOpenDrop((prevState) => !prevState);
					}}
				>
					<h1>Admin</h1>
					<img src="" alt="" className="avatar_img" />
					{openDrop && dropdown(signoutHandler)}
				</div>
			</div>
		</Navbar>
	);
}
