import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Numeral from "react-numeral";

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const subTotal = cartItems.reduce(
		(actual, cummulator) => actual + cummulator.price * cummulator.quantity,
		0
	);

	const addItemHandler = (product) => {
		fetch(`http://localhost:4000/api/cart/${product}`, {
			method: "PATCH",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...product, quantity: product.quantity++ }),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	const removeItemHandler = (product) => {
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

	useEffect(() => {
		fetch(`http://localhost:4000/api/cart`)
			.then((res) => res.json())
			.then((json) => setCartItems(json));
	}, []);

	return (
		<div className="cart-container">
			{cartItems.length === 0 && (
				<div className="cart-empty">
					<p>Your cart is empty</p>
				</div>
			)}
			<div className="cart-body">
				<div className="cart-items">
					{cartItems.map((item) => (
						<div key={item.id} className="cart-item-details">
							<img src={item.image} alt={item.title}></img>
							<div className="card-item-title-price">
								<p>{item.title.split(" ").slice(0, 4).join(" ")}</p>
								<span className="card-item-price">
									{<Numeral value={item.price} format={"0.00a"} />} €
								</span>
							</div>

							<div className="cart-quantity">
								<p>Quantity</p>
								<div className="cart-buttons-area">
									<button
										className="cart-buttons-area-button"
										onClick={() => addItemHandler(item)}
									>
										+
									</button>
									<p>{item.quantity}</p>
									<button
										className="cart-buttons-area-button"
										onClick={() => removeItemHandler(item)}
									>
										-
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="cart-sub-total">
					{cartItems.length !== 0 && (
						<div className="cart-non-empty">
							<div className="cart-subtotal">
								<div className="cart-subtotal-header">Subtotal</div>
								<p>{subTotal.toFixed(2)} €</p>
							</div>
							<div className="go-to-payment">
								<button> CHECKOUT </button>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="cart-back-to-list-wrapper">
				<div className="cart-back-to-list">
					<Link to={"/shop"}> Back to products </Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
