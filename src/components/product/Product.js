import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

function Product(product) {
	const prodObj = product.product.attributes;
	const navigate = useNavigate();
	console.log(product);
	if (!product) {
		return (
			<div className="product">
				<Loader />
			</div>
		);
	}
	return (
		<div
			className="product"
			onClick={() => {
				navigate(`/products/${prodObj.key}`);
			}}
		>
			<div className="product-container">
				<div className="product-img">
					<div className="img-container">
						<img src={prodObj.image.data[0].attributes.url} alt="" />
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
