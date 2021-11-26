import "./App.css";
import "./components/Cart.css";
import Header from "./components/Header";
import Main from "./components/LandingPage/Main";
import ProductsList from "./components/AllProducts/ProductsList";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([
    // for testing purposes, remove the object and leave the array empty
    {
      id: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      rating: { rate: 4.7, count: 500 },
      title: "Mens Cotton Jacket",
      quantity: 1,
    },
  ]); // used the hooks for simplicity purposes

  // a function that can be used both in the cart to increase the quantity and
  // also in single product component to add the product to cart
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

  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <ProductsList />
        <Cart cartItems={cartItems} addItem={addItemHandler} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
