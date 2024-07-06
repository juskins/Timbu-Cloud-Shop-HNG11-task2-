import React from 'react'
import hero from '../data/hero.svg';


const Header = () => {
  return (
    <div>
      <div className=" flex mx-6 my-3 md:mx-0 md:my-0 w-full h-459 bg-cover bg-right md:bg-center" style={{backgroundImage:`url(${hero})`}}>
       <div className='m-auto mx-32 md:flex flex-col gap-3 hidden'>
        <p className='text-4xl font-bold w-72' style={{color:'#9C0001'}}>Stand Out in Bold Red Jacket</p>
        <p className='text-lg mb-4'>Elevate Your Style with Our Bold Red Jacket</p>
        <button className='w-32 text-white p-2' style={{backgroundColor:'#9C0001'}}>Shop Now</button>
       </div>
    </div>

    <div className='m-auto my-8 justify-center items-center flex flex-col md:hidden w-full text-center'>
        <p className='text-4xl font-bold w-1/2' style={{color:'#9C0001'}}>Stand Out in Bold Red Jacket</p>
        <p className='text-lg mb-4'>Elevate Your Style with Our Bold Red Jacket</p>
        <button className='w-32 text-white p-2' style={{backgroundColor:'#9C0001'}}>Shop Now</button>
       </div>

   
    </div>
    
  )
}

export default Header