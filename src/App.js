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
import { useState } from "react";

function RouteWrapper(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <SingleProduct params={params} {...props} navigate={navigate} />;
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeItemHanlder = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const getSingleProductData = (product) => {
    setCartItems((oldState) => [{ ...product, quantity: 1 }, ...oldState]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/shop" element={<ProductsList />} />
          <Route
            path="shop/:id"
            element={<RouteWrapper getProductData={getSingleProductData} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addItem={addItemHandler}
                removeItem={removeItemHanlder}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
