import React, { useState } from "react";
import { NewsCon } from "../components/NewsCon/NewsCon";
import { newsLists } from "../api/news";
import { Paginations } from "../components/NewsCon/Pagination";
export const News = () => {
  const [news, setNews] = useState(newsLists);
  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(8);
  const lastIndex = perPage * currentPage;
  const firstIndex = lastIndex - perPage;
  const totalPage = news.slice(firstIndex, lastIndex);
  return (
    <>
    <div className="container">
      <div className=" carts">
        {totalPage.map((obj, i) => (
          <NewsCon {...obj} key={i} />
        ))}
      </div>
      <Paginations perPage={perPage} productPage={news.length} setcurrentPage={setcurrentPage} currentPage={currentPage}/>
      </div>
    </>
  );
};
