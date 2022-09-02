import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCreator } from "../../store/slices/filterSlice";
import "./CreatorCon.scss";
export const CreatorCon = ({ image, title, date, describtion }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addToCreator = () => {
        const creators = {image, title, date, describtion}
        dispatch(getCreator(creators))
        navigate('/creators/creator')
    }
  return (
    <div className="cart"
    onClick={addToCreator}
    >
      <img src={image} alt="" className="img-cover" />
      <div className="cart-con">
        <h3> {title} </h3>
        <span> {date} </span>
      </div>
    </div>
  );
};
