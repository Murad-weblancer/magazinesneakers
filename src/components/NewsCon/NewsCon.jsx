import React, { useState } from "react";
import "./NewsCon.scss";
import { useDispatch } from "react-redux";
import { getSingle } from "../../store/slices/filterSlice";
import { useNavigate } from "react-router-dom";
export const NewsCon = ({ image, title, date,describtion }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const goToSingle = () => {
    const items = {
      image,
      title,
      date,
      describtion
    };
    dispatch(getSingle(items))
    navigate('/news/single')
  };
  return (
    <div className="cart" onClick={goToSingle} >
      <img src={image} alt="" className="img-cover" />
      <div className="cart-con">
        <h3> {title} </h3>
        <span> {date} </span>
      </div>
    </div>
  );
};
