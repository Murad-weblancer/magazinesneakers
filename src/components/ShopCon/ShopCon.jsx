import React from "react";
import { useDispatch } from "react-redux";
import { getShoe, getShoes } from "../../store/slices/cartSlice";
import "./ShopCon..scss";
import { useNavigate } from "react-router-dom";
export const ShopCon = ({ id, image, title, price, describtion, category }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCart = () => {
    const items = {id, image, title, price}
    dispatch(getShoes(items))
  }
  const addToSingle = () => {
    const items = { image, title, price,describtion,id}
    dispatch(getShoe(items))
    navigate('/single')
  }

  return (
    <div className="cart cart-hover">
      <img src={image} alt="" onClick={addToSingle} />
      <div className="cart-con">
        <h3 onClick={addToSingle}> {title} </h3>
        <span> {price} $ </span>
      </div>
      <button
      onClick={addToCart}
      >
        Buy
      </button>
    </div>
  );
};
