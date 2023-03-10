import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.scss";
import Cart from "../../pages/cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
	const [openCart, setOpenCart] = useState(false);

	const categories = useSelector((state) => state.categoryReducer.categories);
	return (
		<>
			<div className="navbar ">
				<div className="container nav-container">
					<div className="nav-left">
						<ul className="link-group">
							{categories?.map((category) => (
								<li className="link-hover" key={category.attributes.key}>
									<Link className="link" to="/category/comics">
										{category.attributes.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="nav-middle">
						<h1 className="banner">
							<Link to="/">PosterPanda</Link>
						</h1>
					</div>
					<div className="nav-right">
						<div className="nav-cart link-hover">
							<AiOutlineShoppingCart
								size={30}
								onClick={() => {
									setOpenCart(!openCart);
								}}
							/>
							<span className="cart-count center">99</span>
						</div>
					</div>
				</div>
			</div>
			{openCart && (
				<Cart
					onClose={() => {
						setOpenCart(false);
					}}
				/>
			)}
		</>
	);
}

export default Navbar;
