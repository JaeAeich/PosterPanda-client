import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Categories() {
	const navigate = useNavigate();
	const params = useParams();

	const [categoryId, setCategoryId] = useState(null);
	const [categoryProduct, setCategoryProduct] = useState(null);
	const category = useSelector((state) => state.categoryReducer.categories);

	async function fetchData() {
		setCategoryProduct(null);
		const data = await axiosClient.get(`/products?populate=category,image`);

		if (!categoryId) {
			setCategoryProduct(data.data.data);
		} else {
			const fiterdCategoryProduct = data.data.data.filter((obj) => {
				return obj.attributes.category.data.attributes.key === categoryId;
			});
			setCategoryProduct(fiterdCategoryProduct);
		}
	}

	useEffect(() => {
		setCategoryId(params.categoryId);
		fetchData();
		// console.log(categoryId);
		// console.log(categoryProduct);
		// console.log(category);
	}, [params]);

	// const category = [
	// 	{
	// 		id: "comics",
	// 		value: "Comics",
	// 	},
	// 	{
	// 		id: "tv-shows",
	// 		value: "Tv-shows",
	// 	},
	// 	,
	// 	{
	// 		id: "sports",
	// 		value: "Sports",
	// 	},
	// ];
	const handleChange = (e) => {
		setCategoryId(e.target.value);
		navigate(`/category/${e.target.value}`);
	};
	return (
		categoryProduct && (
			<div className="container">
				<div className="categories ">
					<div className="top">
						<div className="info">
							<h2 className="title">Explore All Print Artworks</h2>
							<p className="description">
								India's largesst collection on art work, wall art, comics, and
								lot lot more.
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
										<div key={obj.attributes.key} className="option">
											<input
												name="category-select"
												className="category-select"
												type="radio"
												id={obj.attributes.key}
												value={obj.attributes.key}
												onChange={handleChange}
												checked={obj.attributes.key === categoryId}
											/>
											<label htmlFor={obj.value}>{obj.attributes.name}</label>
										</div>
									);
								})}
							</div>
						</div>
						<div className="product-box">
							{categoryProduct?.map((product) => (
								<Product product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		)
	);
}

export default Categories;
