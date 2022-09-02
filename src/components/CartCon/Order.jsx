import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearShoes } from "../../store/slices/cartSlice";
export const Order = ({ open, modal }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState({ num: "", email: "" });
  const dispatch = useDispatch()
  const goTo = () => {
    if(value.num === ''){
        alert('Write your number!')
    }else if (value.email === ''){
        alert('Write your email')
    }else{
        dispatch(clearShoes())
        navigate('/')
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          <>
            <motion.div
              onClick={modal}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className="modal-order"
            />

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className="order-wrapper"
            >
              <span onClick={modal}>
                {" "}
                <AiOutlineClose size={20} />{" "}
              </span>
              <h1>Order</h1>
              <input
                type="number"
                value={value.num}
                onChange={e=>setValue({...value, num:e.target.value})}
                placeholder="Write your num"
              />
              <input
                type="email"
                value={value.email}
                onChange={e=>setValue({...value, email:e.target.value})}
                placeholder="Write your email"
              />
              <div className="but-order" onClick={goTo}>
                <button className="order">Order</button>
              </div>
            </motion.div>
          </>
        </>
      )}
    </AnimatePresence>
  );
};
