import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { stateContext } from '../App';

const Recommendations = () => {
  const {products} = useContext(stateContext)

  return (
    <div className='flex flex-col gap-6 py-8 text-[#190028]'>
      <p className='font-normal text-[25px] '>You may also like</p>
      <div className='grid gap-4  mt-3 grid-cols-2 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3'>
        {products?.slice(0,4)?.map(product=>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Recommendations