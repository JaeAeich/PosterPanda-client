import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Category, Hero, Product } from "../../components";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";

function Home() {
	// const [categories, setCategories] = useState(null);
	const [topProduct, setTopProduct] = useState(null);

	const categories = useSelector((state) => state.categoryReducer.categories);

	async function fetchData() {
		// const categoryResponse = await axiosClient.get(
		// 	"/categories?populate=image"
		// );
		const topPickResponse = await axiosClient.get("/products?populate=image");

		// setCategories(categoryResponse.data.data);
		const filteredTopProduct = topPickResponse.data.data.filter(
			(product) => product.attributes.isTopPick === true
		);
		setTopProduct(filteredTopProduct);
		// console.log("hmmm", topProduct); //this is giving null
		console.log("hmmm", filteredTopProduct); //this is giving coorect response
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="home">
			<Hero />
			<section className="container collections">
				<div className="info">
					<h2 className="heading">Shop by category</h2>
					<p className="subheading">
						Shop from the best, our tv collections and comics.
					</p>
					{/* <button onClick={() => console.log(topProduct)}>print</button> */}
				</div>
				<div className="content">
					{categories?.map((category) => (
						<Category key={category.id} category={category} />
					))}
				</div>
			</section>
			<section className="container collections">
				<div className="info">
					<h2 className="heading">Our top picks</h2>
					<p className="subheading">All new designs, same old feel.</p>
				</div>
				<div className="content">
					{topProduct?.map((p) => (
						<Product key={p.id} product={p} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Home;
