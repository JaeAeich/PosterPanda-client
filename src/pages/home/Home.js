import React, { useEffect, useState } from "react";
import { Category, Hero, Product } from "../../components";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";

function Home() {
	const [categories, setCategories] = useState(null);
	const [topProduct, setTopProduct] = useState(null);

	async function fetchData() {
		const categoryResponse = await axiosClient.get(
			"/categories?populate=image"
		);
		const topPickResponse = await axiosClient.get(
			"/products?populate=image,filter[isTopPick][$eq]=true"
		);

		setCategories(categoryResponse.data.data);
		setTopProduct(topPickResponse.data.data);
		console.log(topPickResponse.data.data);
		// topPickResponse.data.data.map((obj) => {
		// 	console.log(obj.id);
		// });
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
