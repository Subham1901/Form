import React from "react";

const Cart = ({ state, dispatch, cart }) => {
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
  const totalQty = cart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);
  return (
    <>
      <div className="cart-grid">
        <h2>Cart</h2>
        {cart &&
          cart.map((data) => (
            <div className="cart-container" key={data?.id}>
              <div className="cart-content">
                <img src={data?.thumbnail} />
                <p>{data?.title}</p>
              </div>
              <div className="cart-button">
                <button
                  onClick={() =>
                    dispatch({ type: "add_qty", payload: data?.id })
                  }
                >
                  ➕
                </button>
                <h2>{data?.qty}</h2>
                {data?.qty !== 1 ? (
                  <button
                    onClick={() =>
                      dispatch({ type: "dec_qty", payload: data?.id })
                    }
                  >
                    ➖
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: "remove_from_cart", payload: data?.id })
                    }
                  >
                    ❌
                  </button>
                )}
              </div>
              <h3>{data?.price}</h3>
            </div>
          ))}
      </div>
      <h4>Total : {totalPrice}</h4>
      <h4>Quantity : {totalQty}</h4>
    </>
  );
};

export default Cart;
