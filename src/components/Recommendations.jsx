import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { Box, CircularProgress } from '@mui/material';
import CustomFetch from '../contexts/CustomFetch';

const Recommendations = () => {
  const {products, error, loading} = CustomFetch('?limit=4')

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
    <div className='flex flex-col gap-6 py-8 text-[#190028]'>
      <p className='font-normal text-xl '>You may also like</p>
      <div className='grid gap-4  mt-3 grid-cols-2 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3 md:border-b-2'>
        {products?.map(product=>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Recommendations