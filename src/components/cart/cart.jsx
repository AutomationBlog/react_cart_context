import { useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { cartContext } from "../../App.jsx";
import "./cart.css";

export default function Cart() {
  const { cart } = useContext(cartContext);
  return (
    <div className="cart container">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        <table className="table-responsive">
          <thead>
            <th>Procuct</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          <tbody>
            {cart.map((items) => (
              <>
                <tr key={items.id}>
                  <td>{items.title}</td>
                  <td>
                    {(
                      items.price -
                      (items.price * items.discountPercentage) / 100
                    ).toFixed(2)}
                  </td>
                  <td>
                    <input
                      type="number"
                      value=""
                      onChange={(e) => {
                        items.quantity = e.target.value;
                      }}
                    />
                  </td>
                  <td>{items.price * items.quantity}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
