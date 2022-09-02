import React from 'react'
import './CartCon.scss'
import { useDispatch } from "react-redux";
import { AiFillMinusCircle,AiFillPlusCircle,AiFillCloseCircle } from "react-icons/ai";
import { decriment, increment, removeShoes } from '../../store/slices/cartSlice';
import { Order } from './Order';
export const CartCon = ({title, image, price, id, count}) => {
    const dispatch = useDispatch()

  return (
    <div>
      <div className="item-cart">
        <div className="item-cart-first">
          <img src={image} alt="" />
          <h4> {title} </h4>
        </div>
        <div className="item-cart-second">
          <span className="minus"  >
            {" "}
            <AiFillMinusCircle className="icon"
            onClick={()=>dispatch(decriment(id))}
            />{" "}
          </span>
          <span className="count"> {count} </span>
          <span className="plus"  >
            {" "}
            <AiFillPlusCircle className="icon" 
            onClick={()=>dispatch(increment(id))}
            />{" "}
          </span>
        </div>
        <div className="item-cart-third">
          <span className="price"> {price * count} $ </span>
        </div>
        <div className="item-cart-forth"
        >
          <span>
            <AiFillCloseCircle className="icon two"
            
            onClick={()=>dispatch(removeShoes(id))}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
