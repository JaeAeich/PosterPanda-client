import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Product } from "./components";
import { Categories, Home, ProductDetails } from "./pages";

function App() {
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
