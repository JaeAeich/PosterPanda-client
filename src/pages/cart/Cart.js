import React from "react";
import "./Cart.scss"

function Cart({ onClose }) {
	// const setOpenCart = props.setOpenCart;

	return (
		<div className="cart">
			<div className="overlay" onClick={onClose}></div>
			<div className="cart-box">
				<div className="btn-primary" onClick={onClose}>
					Close
				</div>
			</div>
		</div>
	);
}

export default Cart;
