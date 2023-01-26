import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";

function Categories() {
	const navigate = useNavigate();
	const params = useParams();
	const [categoryId, setCategoryId] = useState(params.id);
	useEffect(() => {
		setCategoryId(params.categoryId);
	}, [params]);

	const category = [
		{
			id: "comics",
			value: "Comics",
		},
		{
			id: "tv-shows",
			value: "Tv-shows",
		},
		,
		{
			id: "sports",
			value: "Sports",
		},
	];
	const handleChange = (e) => {
		navigate(`/category/${e.target.value}`);
	};
	return (
		<div className="container">
			<div className="categories ">
				<div className="top">
					<div className="info">
						<h2 className="title">Explore All Print Artworks</h2>
						<p className="description">
							India's largesst collection on art work, wall art, comics, and lot
							lot more.
						</p>
					</div>
					<div className="sort">
						<div className="sort-title">Sort by</div>
						<select className="sort-options" name="sort-option" id="sort">
							<option name="sort-option" value="relevance" id="relevance">
								Relevance
							</option>
							<option name="sort-option" value="new" id="new">
								New
							</option>
							<option name="sort-option" value="hot" id="hot">
								Hot
							</option>
						</select>
					</div>
				</div>
				<div className="content">
					<div className="filter-box">
						<h3>Category</h3>
						<div className="category-filter">
							{category.map((obj) => {
								return (
									<div className="option">
										<input
											name="category-select"
											className="category-select"
											type="radio"
											id={obj.id}
											value={obj.id}
											onChange={handleChange}
											checked={obj.id===categoryId}
										/>
										<label htmlFor={obj.value}>{obj.value}</label>
									</div>
								);
							})}
						</div>
					</div>
					<div className="product-box">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
