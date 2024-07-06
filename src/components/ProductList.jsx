import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { useOutletContext } from 'react-router-dom';
import { stateContext } from '../App';
import CustomFetch from '../contexts/CustomFetch';

const ProductList = () => {
  
  const {products, error, loading} = CustomFetch('')
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
    <div className='px-28 py-8 message'>
      <div className='flex justify-between'>
        <p className='font-bold text-2xl '>Our Products</p>
        <p className='font-semibold  text-xl' style={{borderBottom:`2px solid ${message === 'Added to Cart' ? 'green' : 'red'}`}}>{message}</p>
      </div>
      <div className='grid gap-4  mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3 border-b-2'>
        {products?.map(product=>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList