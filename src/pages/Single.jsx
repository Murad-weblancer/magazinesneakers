import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Pages.scss";
export const Single = () => {
  const { single } = useSelector((state) => state.filter);
  return (
    <div className="single">
      <h1> {single.title} </h1>
      <img src={single.image} alt="" />
      <div className="container">
        <p>{single.describtion}</p>
      </div>
    </div>
  );
};
