import React, { useState } from "react";
import { ShopCon } from "../components/ShopCon/ShopCon";
import { shop } from "../api/shop";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/slices/filterSlice";
import { Pag } from "../components/ShopCon/Pag";
export const Shop = () => {
  const [shopCon, setShopCon] = useState(shop);
  const {search} = useSelector(state=>state.filter)
  const listCategory = ["All", "Nike", "Adidas", "Under Armour", "Puma"];
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filterCategoy = (category) => {
    dispatch(getCategory(category));
    setShopCon(
      shop.filter((cat) => {
        if (category) {
          return cat.category === category;
        } else {
          return shop;
        }
      })
    );
  };
    // pagination
    const [currentPage, setcurrentPage] = useState(1);
    const [perPage] = useState(6);
    const lastIndex = perPage * currentPage;
    const firstIndex = lastIndex - perPage;
    const totalPage = shopCon.slice(firstIndex, lastIndex);
  return (
    <>
      <div className="container">

        <ul className="category">
          {listCategory.map((obj, i) => (
            <li
              key={i}
              className={categoryId === i ? "active" : ""}
              onClick={() => filterCategoy(i)}
            >
              {" "}
              {obj}{" "}
            </li>
          ))}
        </ul>
        <div className="shops">
          {totalPage.filter(item=>{
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
          }).map((obj, i) => (
            <ShopCon {...obj} key={i} />
          ))}
        </div>
        <Pag perPage={perPage} productPage={shopCon.length} setcurrentPage={setcurrentPage} currentPage={currentPage}/>

      </div>
    </>
  );
};
