import React from "react";
import { Category, Hero, Product } from "../../components";
import "./Home.scss";

function Home() {
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
					<Category />
					<Category />
					<Category />
				</div>
			</section>
			<section className="container collections">
				<div className="info">
					<h2 className="heading">Our top picks</h2>
					<p className="subheading">All new designs, same old feel.</p>
				</div>
				<div className="content">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</section>
		</div>
	);
}

export default Home;
