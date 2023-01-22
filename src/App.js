import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Product } from "./components";
import { Categories, Home } from "./pages";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Categories />} />
				<Route path="/products/:id" element={<Product />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
