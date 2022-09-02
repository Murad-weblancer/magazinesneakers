import React, { useState } from "react";
import { CartCon } from "../components/CartCon/CartCon";
import { useSelector, useDispatch } from "react-redux";
import { BsCartDash } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { clearShoes } from "../store/slices/cartSlice";
import { Order } from "../components/CartCon/Order";
export const Cart = () => {
  const { shoes,totalPrice } = useSelector((state) => state.cart);
  const totalCount = shoes.reduce((sum,obj)=>sum+obj.count,0)
  const [open,setOpen] = useState(false)
  open?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
  const modal = () => {
    setOpen(!open)
  }
  const dispatch = useDispatch()
  if (shoes.length === 0) {
    return (
      <div className="container">
        <div className="empty">
          <img className="empty-img" src="img/empty.png" alt="" />
          <Link to="/">
            <button> Go Back </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
    <div className="container cartcon">
      <div className="top-cart mt-10">
        <div className="top-cart-left">
          <BsCartDash className="icon" />
          <h1>Cart</h1>
        </div>
        <div className="top-cart-right"
        onClick={()=>dispatch(clearShoes())}
        >
          <RiDeleteBin6Fill className="icon" />
          <h3>Clear</h3>
        </div>
      </div>
      {shoes.map((obj, i) => (
        <CartCon key={i} {...obj} />
      ))}
      <div className="bottom-cart mb-10">
        <div className="bottom-cart-top">
          <h3>
            Number of products: {totalCount} <span>  pcs.</span>
          </h3>
          <div>
            <h3>
              Amount <span> {totalPrice} $.</span>
            </h3>
            <button className="order"
            onClick={modal}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <Order open={open} modal={modal} />
    </>
  );
};
