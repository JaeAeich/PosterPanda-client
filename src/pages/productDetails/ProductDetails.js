import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import product from "../../assets/P1.webp";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { Loader } from "../../components";

function ProductDetails() {
	const params = useParams();
	const [product, setProduct] = useState(null);
	console.log(params);

	async function fetchData() {
		const fetchedProduct = await axiosClient.get(
			`/products?filters[key][$eq]=${params.id}&populate=image`
		);
		setProduct(fetchedProduct.data.data[0].attributes);
	}

	useEffect(() => {
		setProduct(null);
		fetchData();
	}, [params]);

	if (!product) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	// const product = product;
	return (
		product && (
			<div className="product-details">
				<div className="container">
					<div className="product-layout">
						<div className="product-image center">
							<img src={product.image.data[0].attributes.url} alt="" />
						</div>
						<div className="product-info">
							<h1 className="heading">{product.name}</h1>
							<h2 className="price">$ {product.price}</h2>
							<p className="description">{product.description}</p>
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
		)
	);
}

export default ProductDetails;
