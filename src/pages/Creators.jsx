import React, { useState } from 'react'
import { CreatorCon } from '../components/Creators/CreatorCon'
import {creator} from '../api/creator'
import { Pagin } from '../components/Creators/Pagin'
export const Creators = () => {
  const [creatorApi, setCreatorApi] = useState(creator)
      // pagination
      const [currentPage, setcurrentPage] = useState(1);
      const [perPage] = useState(10);
      const lastIndex = perPage * currentPage;
      const firstIndex = lastIndex - perPage;
      const totalPage = creatorApi.slice(firstIndex, lastIndex);
  return (
    <div className='container creators'>
      {
        totalPage.map((obj,i)=>(
          <CreatorCon {...obj} key={i} />
        ))
      }

      <Pagin perPage={perPage} productPage={creatorApi.length} setcurrentPage={setcurrentPage} currentPage={currentPage}/>
    </div>
  )
}
