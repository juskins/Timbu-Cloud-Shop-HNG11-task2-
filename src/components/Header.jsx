import React from 'react'
import hero from '../data/hero.svg';


const Header = () => {
  return (
    <div className=" flex  bg-header-pattern w-full h-459" style={{backgroundImage:`url(${hero})`}}>
       <div className='m-auto mx-32 flex flex-col gap-3'>
        <p className='text-4xl font-bold w-72' style={{color:'#9C0001'}}>Stand Out in Bold Red Jacket</p>
        <p className='text-lg mb-4'>Elevate Your Style with Our Bold Red Jacket</p>
        <button className='w-32 text-white p-2' style={{backgroundColor:'#9C0001'}}>Shop Now</button>
       </div>
    </div>
    
  )
}

export default Header