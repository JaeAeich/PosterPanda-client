import React from "react";
import "./Product.scss";
import P1 from "../../assets/P2.png";

function Product(product) {
	const prodObj = product.product.attributes;
	console.log("this prod =>", prodObj);
	return (
		<div className="product">
			<div className="product-container">
				<div className="product-img">
					<div className="img-container">
						<img src="../../assets/P1.webp" alt="" />
					</div>
				</div>
				<div className="product-info">
					<p className="title">{prodObj.name}</p>
					<p className="price">$ {prodObj.price}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
