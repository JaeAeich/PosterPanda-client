import React from "react";
import "./Product.scss";
import P1 from "../../assets/P2.png";

function Product() {
	return (
		<div className="product">
			<div className="product-container">
				<div className="product-img">
					<div className="img-container">
						<img src={P1} alt="" />
					</div>
				</div>
				<div className="product-info">
					<p className="title">Delux wall hanger, matt finish</p>
					<p className="price">$ 20</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
