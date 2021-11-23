import "./App.css";
import Header from "./components/Header";
import Main from "./components/LandingPage/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsList from "./components/AllProducts/ProductsList";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				{/* <Main /> */}
				<ProductsList />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
