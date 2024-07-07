import React from 'react'
import hero from '../assets/hero.svg';
// import mobilehero from '../data/mobilehero.svg';


const Header = () => {
  return (
    <div className='max-w-[1440px] md:mx-auto mx-auto'>
      <div className=" flex my-3 md:my-0 w-full h-459  bg-cover md:bg-center bg-mobile md:bg-desktop bg-center" >
       <div className='m-auto mx-32 md:flex flex-col gap-3 hidden'>
        <p className='text-4xl font-bold w-72' style={{color:'#9C0001'}}>Stand Out in Bold Red Jacket</p>
        <p className='text-lg mb-4'>Elevate Your Style with Our Bold Red Jacket</p>
        <button className='w-32 text-white p-2' style={{backgroundColor:'#9C0001'}}>Shop Now</button>
       </div>
    </div>

    <div className='m-auto my-8 justify-center items-center flex gap-2 flex-col md:hidden w-full text-center'>
        <p className='text-[28px] leading-[33.6px] font-bold w-[219px]' style={{color:'#9C0001'}}>Stand Out in Bold Red Jacket</p>
        <p className='text-lg mb-4 text-[#190028]'>Elevate Your Style with Our Bold Red Jacket</p>
        <button className='w-32 text-[#FFE8F1] p-2' style={{backgroundColor:'#9C0001'}}>Shop Now</button>
       </div>

   
    </div>
    
  )
}

export default Header