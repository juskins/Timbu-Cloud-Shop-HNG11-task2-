import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { stateContext } from '../App';
import CustomFetch from '../contexts/CustomFetch';

const ProductList = () => {
  const {message,page,setPage} = useContext(stateContext)
  const {products, error, loading} = CustomFetch(page)
  const [focusedButton, setFocusedButton] = useState(null);
  // console.log(products)
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
        <p className='font-normal text-[#190028] text-[25px] product-heading'>Our Products</p>
        <p className='font-semibold  text-xl' style={{borderBottom:`2px solid ${message === 'Added to Cart' ? 'green' : 'red'}`}}>{message}</p>
      </div>
      <div className='grid gap-4  mt-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3 border-none md:border-b-2'>
        {products?.map(product=>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  
  <div className=" m-auto">
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button onClick={()=> page !==1 && setPage(page-1)}  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
        <button onClick={()=>{setPage(1);setFocusedButton(1);}} aria-current="page" className="relative z-10 inline-flex items-center border-gray-300 border  px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus-visible:outline" style={{backgroundColor:focusedButton === 1 ? '#972222' : ''}}>1</button>
        <button onClick={()=>{setPage(2);setFocusedButton(2);}} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 border-gray-300 border " style={{backgroundColor:focusedButton === 2 ? '#972222' : ''}}>2</button>
        <button onClick={()=>{setPage(3);setFocusedButton(3);}} className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 border-gray-300 border md:inline-flex" style={{backgroundColor:focusedButton === 3 ? '#972222' : ''}}>3</button>
        <button onClick={()=>page !==3 && setPage(page+1)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 border-gray-300 border hover:bg-gray-50 ">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>

      <button className='md:hidden block m-auto border-1 py-2 px-3 w-[166px] border:[#C6BFC9] text-[#9E94A5] text-[12px]'>See more</button>
    </div>
  )
}

export default ProductList