import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cartItems, addItem } = props;
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 && (
          <div>
            <p>Cart is empty</p>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.price} $</div>
            <div>{item.quantity}</div>
            <div>
              <button onClick={() => addItem(item)}>+</button>
              {/* <button onClick={() => removeItem(item)}>-</button> */}
            </div>

            <div>
              {item.quantity} X {item.price} $
            </div>
            {/* {console.log(item.quantity)} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
