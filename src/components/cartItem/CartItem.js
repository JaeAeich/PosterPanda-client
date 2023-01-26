import React from "react";
import "./CartItem.scss";
import img from "../../assets/P2.png"

function CartItem() {
	return (
		<div className="cart-item">
			<div className="item-img">
				<img src={img} />
			</div>
			<div className="item-info-wrapper">
				<div className="item-info">
					<div className="title">Product title</div>
					<div className="price">
						<div className="price-title">Price: </div>
						<div className="price-value">999</div>
					</div>
					<div className="quantity-selector">
						<span className="btn dec">-</span>
						<span className="quantity">0</span>
						<span className="btn inc">+</span>
					</div>
					<div className="total-price price">
						<div className="price-title">Total Price: </div>
						<div className="price-value">999</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
