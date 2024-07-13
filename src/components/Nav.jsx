import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/avatar.svg';
import logo from '../assets/logo.svg';
import { stateContext } from '../App'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { PiChatsBold, PiShoppingCartBold } from 'react-icons/pi';

const Nav = () => {
    const {cartItems,searchTerm,handleSearchChange} = useContext(stateContext);
   
    
  return (
    <div className='flex mx-auto max-w-[1440px] px-6 py-0 lg:px-32 lg:py-6 gap-2 lg:gap-24 justify-between items-center flex-wrap lg:flex-nowrap'>
        <Link to='/'><img src={logo} alt="" className='w-32 lg:w-52'/></Link>
        <input  value={searchTerm}
        onChange={handleSearchChange}
        type="search" style={{border:'1px solid #C6BFC9'}} className='w-full rounded-lg mb-2 lg:block hidden lg:mb-0 px-4 py-2 order-3 lg:order-none' placeholder='Search all Products'/>
        <div className='relative w-full mb-2 order-3 lg:hidden block'>
            <input type="search" value={searchTerm}
            onChange={handleSearchChange} className='w-full rounded py-2 px-3 ' style={{border:'1px solid #E1DEE3'}}/>
            <button className='absolute py-2 px-4 w-[26.08px] flex flex-col justify-center items-center right-0 text-[#EDEBEE] top-1/2 -translate-y-1/2  mr-[10px]' style={{backgroundColor:"#9C0001"}}><MdOutlineArrowRightAlt/></button>
        </div>
        <div className='flex items-center min-w-[156px]  gap-x-3 text-2xl text-[#190028]'>
            <div>
                <button className=''><PiChatsBold /></button>
            </div>
            <div>
                <button className=''><FaRegHeart/></button>
            </div>
            <div className='relative'>
                <Link to='checkout'>
                <button className=''>
                    <div><PiShoppingCartBold/></div>
                    <small className='absolute text-white bg-[red] rounded-full h-4 w-4  -top-2 -right-3 text-xs' style={{display:`${cartItems.length === 0 ? 'none' : 'block'}`}}>{cartItems.length}</small>
                </button>
                </Link>
            </div>
            <div className='text-[#C6BFC9]'>|</div>
            <div className='-mt-2'>
                <img src={avatar} alt="" className=''/>
            </div>
            
        </div>
    </div>
  )
}

export default Nav