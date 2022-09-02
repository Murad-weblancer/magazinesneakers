import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {AiOutlineClose} from 'react-icons/ai'

import { getSearch } from "../../store/slices/filterSlice";
import "./Search.scss";
export const Search = ({ searches, openSearch,valueRef,searchEnter }) => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsActive(!isActive);
      return searchEnter('')
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <AnimatePresence>
      {searches && (
        <>
          <motion.div
            className="search"
            onClick={openSearch}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
          />
          <motion.input
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="search-input"
            value={search}
            onChange={(e) => dispatch(getSearch(e.target.value))}
            type="text"
            placeholder="Search..."
            ref={valueRef}
            />
        </>
      )}
    </AnimatePresence>
  );
};
