import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import "./Category.scss";

function Category(category) {
	const navigate = useNavigate();
	// console.log(category.category.attributes.image.data[0].attributes.url);

	if (!category) {
		return (
			<div className="category">
				<Loader />
			</div>
		);
	}
	return (
		<div
			onClick={() => {
				navigate(`/category/${category.category.attributes.key}`);
			}}
			className="category "
			style={{
				backgroundImage: `url(${category.category.attributes.image.data[0].attributes.url})`,
			}}
		>
			<div className="category-content center">
				<h3 className="heading">{category.category.attributes.name}</h3>
			</div>
		</div>
	);
}

export default Category;
