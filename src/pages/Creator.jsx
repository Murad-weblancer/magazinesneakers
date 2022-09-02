import React from "react";
import { useSelector } from "react-redux";

export const Creator = () => {
    const {creator} = useSelector(state=>state.filter)
  return (
    <div className="single">
      <h1> {creator.title} </h1>
      <img src={creator.image} alt="" />
      <div className="container">
        <p>{creator.describtion}</p>
      </div>
    </div>
  );
};
