import React from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { getShoes } from "../store/slices/cartSlice";
export const SingleShoes = () => {
  const { shoe } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(getShoes(shoe))
  }
  return (
    <div className="single">
      <h1> {shoe.title} </h1>
      <img src={shoe.image} alt="" />
      <div className="container">
        <p>{shoe.describtion}</p>
        <button className="single-but" onClick={addToCart}> Buy </button>
      </div>
    </div>
  );
};
