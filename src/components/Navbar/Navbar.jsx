import React, { useRef, useState } from "react";
import "./Navbar.scss";
import { FaSearch, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Popup } from "../Popup/Popup";
import { Search } from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../store/slices/filterSlice";
export const Navbar = () => {
  const { shoes } = useSelector((state) => state.cart);
  const totalCoumnt = shoes.reduce((sum, obj) => sum + obj.count, 0);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch()
  const location = useLocation();
  if (open) {
    document.body.style.overflow = "hidden";
  } else if (search) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const modal = () => {
    setOpen(!open);
  };
  const activeStyles = {
    color: "#ff756e",
  };
  const openSearch = () => {
    setSearch(!search);
    dispatch(getSearch(''))

  };
  return (
    <>
      <div className="main">
        <nav className="navbar container">
          <div className="navbar-logo">
            <div
              className={
                active ? "navbar-logo-burger active" : "navbar-logo-burger"
              }
              onClick={() => setActive(!active)}
            >
              {active ? (
                <span>
                  {" "}
                  <RiCloseLine size={25} />{" "}
                </span>
              ) : (
                <span>
                  <GiHamburgerMenu size={25} />
                </span>
              )}
            </div>
            <Link to="/">
              <img
                src="https://sneakers-magazine.com/wp-content/uploads/2019/06/sneakers_magazine_logo.png"
                alt=""
              />
            </Link>
          </div>
          <ul className={active ? "navbar-list active" : "navbar-list"}>
            <NavLink
              onClick={() => setActive(!active)}
              to="/"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => setActive(!active)}
              to="/news"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              News
            </NavLink>
            <NavLink
              onClick={() => setActive(!active)}
              to="/creators"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Creators
            </NavLink>
          </ul>
          <div className="navbar-links">
            {location.pathname === "/" && (
              <div className="navbar-links-search" onClick={openSearch}>
                <FaSearch />
              </div>
            )}

            <div className="navbar-links-follow" onClick={modal}>
              <span>FOLLOW </span>
              <div>
                <FaPlus />
              </div>
            </div>
            <Link to="/cart">
              <div className="navbar-links-cart">
                <BiShoppingBag size={25} />
                {totalCoumnt ? <span> {totalCoumnt} </span> : null}
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <Popup open={open} modal={modal} />
      <Search
        searches={search}
        openSearch={openSearch}
        searchEnter={setSearch}
      />
    </>
  );
};
