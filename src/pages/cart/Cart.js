import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CartItem } from "../../components";
import "./Cart.scss";

function Cart({ onClose }) {
	// const setOpenCart = props.setOpenCart;

	return (
		<div className="cart">
			<div className="overlay" onClick={onClose}></div>
			<div className="cart-box">
				<div className="close-btn">
					<h2 className="title">Shopping Cart</h2>
					<div className="close" onClick={onClose}>
						<AiOutlineClose />
						<span className="text">Close</span>
					</div>
				</div>
				<div className="cart-items">
				<CartItem />
				<CartItem />
				<CartItem />
				</div>
				<div className="checkout-info">
					<div className="total-amt">
						<div className="total-msg">Total:</div>
						<div className="total-value"> 999</div>
					</div>
					<div className="checkout-btn btn-primary">Checkout</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
