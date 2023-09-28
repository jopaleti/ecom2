import React from "react";
import "./buyer-navbar.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { signout } from "../../../actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../nav-bar/NavBar";
import Aside from "../../aside/Aside";
import { contextApi } from "../../../context/Context";

const dropdown = (signoutHandler) => {
	return (
		<div className="dropdown_container">
			<Link to="/">
				<h6>Settings</h6>
			</Link>
			<Link to="/">
				<h6>My requests</h6>
			</Link>
			<Link to="/">
				<h6>My orders</h6>
			</Link>
			<Link to="/">
				<h6>Favourite lists</h6>
			</Link>
			<Link to="/">
				<h6>Administration</h6>
			</Link>
			<Link to="/">
				<h6>Billing history</h6>
			</Link>
			<Link to="/">
				<h6>Help & support</h6>
			</Link>
			<Link to="/" onClick={() => signoutHandler()}>
				<h6>Logout</h6>
			</Link>
		</div>
	);
};
export function MobileBuyerNavbar() {
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
							<h1>Buyer</h1>
							{/* <img src="" alt="" className="avatar_img" /> */}
							{openDrop && dropdown(signoutHandler)}
						</div>
					</aside>
				</Aside>
			)}
		</>
	);
}
export function BuyerNavbar() {
	const dispatch = useDispatch();
	const [openDrop, setOpenDrop] = useState(false);
	const signoutHandler = () => {
		dispatch(signout());
	};
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/search/name/${name}`);
	};

	return (
		<Navbar>
			<div className="buyerNav">
				<div className="flex_item2">
					<form className="input_flex" onSubmit={submitHandler}>
						<input
							type="text"
							name="q"
							id="q"
							onChange={(e) => setName(e.target.value)}
							placeholder="Search Input"
						/>

						<button>
							<i class="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
					<div className="icon_container">
						<div className="link_container">
							<Link to="/">
								<h6>Sellers</h6>
							</Link>
							<Link to="/">
								<h6>Orders</h6>
							</Link>
						</div>
						<div className="icon_flex">
							<span>
								<i class="fa fa-bell-o" aria-hidden="true"></i>
							</span>
							<span>
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
							</span>
						</div>
					</div>
				</div>
				{/* Avatar Section */}
				<div
					className="avatar"
					onClick={() => {
						setOpenDrop((prevState) => !prevState);
					}}
				>
					<h1>Buyer image</h1>
					{/* <img src="" alt="" className="avatar_img" /> */}
					{openDrop && dropdown(signoutHandler)}
				</div>
			</div>
		</Navbar>
	);
}
