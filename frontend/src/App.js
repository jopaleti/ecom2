import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { signout } from "./actions/userActions";
import { AdminRoute, SellerRoute, PrivateRoute } from "./routes/routesIndex.js";
import {
	CartScreen,
	HomeScreen,
	OrderHistoryScreen,
	OrderScreen,
	PaymentMethodScreen,
	PlaceOrderScreen,
	ProductListScreen,
	ProductScreen,
	ProfileScreen,
	RegisterScreen,
	ShippingAddressScreen,
	SigninScreen,
	ProductEditScreen,
	OrderListScreen,
	UserListScreen,
	UserEditScreen,
	SellerScreen,
	SearchScreen,
	MapScreen,
	SupportScreen,
	DashboardScreen,
} from "./screens/screensIndex";
import SearchBox from "./components/SearchBox";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import HandleNavbar from "./components/handle-navbar/HandleNavbar";

import { listProductCategories } from "./actions/productActions";
import ChatBox from "./components/ChatBox";

function App() {
	const cart = useSelector((state) => state.cart);
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};

	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
		loading: loadingCategories,
		error: errorCategories,
		categories,
	} = productCategoryList;
	useEffect(() => {
		dispatch(listProductCategories());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<HandleNavbar />
			<div className="grid-container">
				{/* <header className="row">
					<div>
						<button
							type="button"
							className="open-sidebar"
							onClick={() => setSidebarIsOpen(true)}
						>
							<i className="fa fa-bars"></i>
						</button>
						<Link className="brand" to="/">
							amazona
						</Link>
					</div>
					<div>
						<SearchBox />
					</div>
					<div>
						<Link to="/cart">
							Cart
							{cartItems.length > 0 && (
								<span className="badge">{cartItems.length}</span>
							)}
						</Link>
						{userInfo ? (
							<div className="dropdown">
								<Link to="#">
									{userInfo.name} <i className="fa fa-caret-down"></i>{" "}
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="/profile">User Profile</Link>
									</li>
									<li>
										<Link to="/orderhistory">Order History</Link>
									</li>
									<li>
										<Link to="#signout" onClick={signoutHandler}>
											Sign Out
										</Link>
									</li>
								</ul>
							</div>
						) : (
							<Link to="/signin">Sign In</Link>
						)}
						{userInfo && userInfo.isSeller && (
							<div className="dropdown">
								<Link to="#admin">
									Seller <i className="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="/productlist/seller">Products</Link>
									</li>
									<li>
										<Link to="/orderlist/seller">Orders</Link>
									</li>
								</ul>
							</div>
						)}
						{userInfo && userInfo.isAdmin && (
							<div className="dropdown">
								<Link to="#admin">
									Admin <i className="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/productlist">Products</Link>
									</li>
									<li>
										<Link to="/orderlist">Orders</Link>
									</li>
									<li>
										<Link to="/userlist">Users</Link>
									</li>
									<li>
										<Link to="/support">Support</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
				</header>
				<aside className={sidebarIsOpen ? "open" : ""}>
					<ul className="categories">
						<li>
							<strong>Categories</strong>
							<button
								onClick={() => setSidebarIsOpen(false)}
								className="close-sidebar"
								type="button"
							>
								<i className="fa fa-close"></i>
							</button>
						</li>
						{loadingCategories ? (
							<LoadingBox></LoadingBox>
						) : errorCategories ? (
							<MessageBox variant="danger">{errorCategories}</MessageBox>
						) : (
							categories.map((c) => (
								<li key={c}>
									<Link
										to={`/search/category/${c}`}
										onClick={() => setSidebarIsOpen(false)}
									>
										{c}
									</Link>
								</li>
							))
						)}
					</ul>
				</aside> */}
				<main>
					<Routes>
						<Route path="/seller/:id" element={<SellerScreen />}></Route>
						<Route path="/cart" element={<CartScreen />}></Route>
						<Route path="/cart/:id" element={<CartScreen />}></Route>
						<Route
							path="/product/:id"
							element={<ProductScreen />}
							exact
						></Route>
						<Route
							path="/product/:id/edit"
							element={ProductEditScreen}
							exact
						></Route>
						<Route path="/signin" element={<SigninScreen />}></Route>
						<Route path="/register" element={<RegisterScreen />}></Route>
						<Route path="/shipping" element={<ShippingAddressScreen />}></Route>
						<Route path="/payment" element={<PaymentMethodScreen />}></Route>
						<Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
						<Route path="/order/:id" element={<OrderScreen />}></Route>
						<Route
							path="/orderhistory"
							element={<OrderHistoryScreen />}
						></Route>
						<Route path="/search/name" element={<SearchScreen />} exact></Route>
						<Route
							path="/search/name/:name"
							element={<SearchScreen />}
							exact
						></Route>
						<Route
							path="/search/category/:category"
							element={<SearchScreen />}
							exact
						></Route>
						<Route
							path="/search/category/:category/name/:name"
							element={<SearchScreen />}
							exact
						></Route>
						<Route
							path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
							element={<SearchScreen />}
							exact
						></Route>

						<Route
							path="/profile"
							element={
								<PrivateRoute>
									<ProfileScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path="/map"
							element={
								<PrivateRoute>
									<MapScreen />
								</PrivateRoute>
							}
						/>

						<Route
							path="/productlist"
							element={
								<AdminRoute>
									<ProductListScreen />
								</AdminRoute>
							}
						/>

						<Route
							path="/productlist/pageNumber/:pageNumber"
							element={
								<AdminRoute>
									<ProductListScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/orderlist"
							element={
								<AdminRoute>
									<OrderListScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/userlist"
							element={
								<AdminRoute>
									<UserListScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/user/:id/edit"
							element={
								<AdminRoute>
									<UserEditScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<AdminRoute>
									<DashboardScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/support"
							element={
								<AdminRoute>
									<SupportScreen />
								</AdminRoute>
							}
						/>
						<Route
							path="/productlist/seller"
							element={
								<SellerRoute>
									<ProductListScreen />
								</SellerRoute>
							}
						/>
						<Route
							path="/orderlist/seller"
							element={
								<SellerRoute>
									<OrderListScreen />
								</SellerRoute>
							}
						/>

						<Route path="/" element={<HomeScreen />} exact></Route>
					</Routes>
				</main>
				<footer className="row center">
					{userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
					<div>All right reserved</div>{" "}
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
