import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Product } from "./components";
import { Categories, Home, ProductDetails } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "./redux/categorySlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);
	
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:categoryId?" element={<Categories />} />
				<Route path="/products/:id" element={<ProductDetails />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
