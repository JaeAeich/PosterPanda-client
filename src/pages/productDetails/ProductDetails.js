import React from "react";
import "./ProductDetails.scss";
import product from "../../assets/P1.webp";

function ProductDetails() {
	return (
		<div className="product-details">
			<div className="container">
				<div className="product-layout">
					<div className="product-image center">
						<img src={product} alt="" />
					</div>
					<div className="product-info">
						<h1 className="heading">Wallpaper</h1>
						<h2 className="price">$ 30</h2>
						<p className="description">
							high-resolution image of a majestic mountain range. Printed on
							high-quality, glossy paper, the colors are vibrant and the details
							are sharp. Measuring 24" x 36", it's the perfect size for any room
							in your home or office
						</p>
						<div className="cart-options">
							<div className="quantity-selector">
								<span className="btn dec">-</span>
								<span className="quantity">0</span>
								<span className="btn inc">+</span>
							</div>
							<div className="btn-primary">Add to Cart</div>
						</div>
						<div className="return-policy">
							<ul>
								<li>
									Our posters are eligible for full refund or replacement
									within 30 days of purchase
								</li>
								<li>
									Please contact us if you are not completely satisfied with
									your product.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
