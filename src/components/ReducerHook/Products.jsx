import React, { useEffect, useReducer, useState } from "react";
import "./product.css";
import { cartReducer } from "./Reducer";
import Cart from "./Cart";
const Products = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    dispatch({ type: "add_product", payload: data.products });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-container">
      <div className="cell1">
        {state.cart.length > 0 && (
          <Cart state={state} dispatch={dispatch} cart={state?.cart} />
        )}
      </div>
      <div className="cell2">
        {state.products &&
          state.products.map((data) => (
            <div className="card" key={data?.id}>
              <div className="card-content">
                <img alt="image" src={data?.thumbnail} />
                <p>{data?.description}</p>
                <h2>{data?.price}</h2>
              </div>
              <div className="buttons">
                {state.cart.some((cart) => cart?.id === data?.id) ? (
                  <button
                    onClick={() =>
                      dispatch({
                        type: "remove_from_cart",
                        payload: data?.id,
                      })
                    }
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({
                        type: "add_to_cart",
                        payload: { ...data, qty: 1 },
                      })
                    }
                  >
                    Addtocart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
