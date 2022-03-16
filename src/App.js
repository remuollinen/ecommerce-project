import "./App.css";
import Header from "./components/Header";
import Main from "./components/LandingPage/Main";
import ProductsList from "./components/AllProducts/ProductsList";
import Footer from "./components/Footer";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useNavigate,
} from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";

function RouteWrapper(props) {
	const params = useParams();
	const navigate = useNavigate();
	return <SingleProduct params={params} {...props} navigate={navigate} />;
}

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route index element={<Main />} />
					<Route path="/shop" element={<ProductsList />} />
					<Route path="shop/:id" element={<RouteWrapper />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
