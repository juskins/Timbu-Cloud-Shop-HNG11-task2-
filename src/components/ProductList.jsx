import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { stateContext } from '../App';
import CustomFetch from '../contexts/CustomFetch';

const ProductList = () => {
  
  const {products, error, loading} = CustomFetch()
  const {message} = useContext(stateContext)
  if(loading){
    return(
      <div className='justify-center flex text-center my-16'>
        <Box sx={{ display: 'flex'}}>
        <CircularProgress className='h-52 text-3xl'/>
        </Box>
      </div>
    )
  }
  if(error){
    return(
      <div className='flex my-16 justify-center items-center font-bold text-2xl'>Error Encountered while fetching Data</div>
    )
  }

  return (
    <div className='px-4 py-8 md:px-28 md:py-8 message max-w-[1440px] md:mx-auto'>
      <div className='flex justify-between'>
        <p className='font-normal text-[#190028] text-2xl product-heading'>Our Products</p>
        <p className='font-semibold  text-xl' style={{borderBottom:`2px solid ${message === 'Added to Cart' ? 'green' : 'red'}`}}>{message}</p>
      </div>
      <div className='grid gap-4  mt-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3 border-none md:border-b-2'>
        {products.slice(0,12)?.map(product=>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
      <button className='md:hidden block m-auto border-1 py-2 px-3 w-[166px] border:[#C6BFC9] text-[#9E94A5] text-[12px]'>See more</button>
    </div>
  )
}

export default ProductList