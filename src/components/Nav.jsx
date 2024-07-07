import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { TiMessages } from 'react-icons/ti'
import avatar from '../data/avatar.svg';
import logo from '../data/logo.svg';
import { stateContext } from '../App'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const Nav = () => {
    const {cartItems} = useContext(stateContext)
  return (
    <div className='flex mx-auto max-w-[1440px] px-6 py-0 lg:px-32 lg:py-6 gap-2 lg:gap-24 justify-between items-center flex-wrap lg:flex-nowrap'>
        <Link to='/'><img src={logo} alt="" className='w-32 lg:w-52'/></Link>
        <input type="search" style={{border:'1px solid #C6BFC9'}} className='w-full mb-2 hidden lg:mb-0 px-4 py-2 order-3 lg:order-none' placeholder='Search all Products'/>
        <div className='relative w-full mb-2 order-3 lg:hidden'>
            <input type="text" className='w-full py-2 px-3 ' style={{border:'1px solid #E1DEE3'}}/>
            <button className='absolute py-2 px-4 w-[26.08px] flex flex-col justify-center items-center right-0 text-[#EDEBEE] top-1/2 -translate-y-1/2  mr-[10px]' style={{backgroundColor:"#9C0001"}}><MdOutlineArrowRightAlt/></button>
        </div>
        <div className='flex items-center gap-3 text-xl'>
            <div>
                <button><TiMessages/></button>
            </div>
            <div>
                <button><CiHeart/></button>
            </div>
            <div className='relative'>
                <Link to='checkout'>
                <button>
                    <div><AiOutlineShoppingCart/></div>
                    <small className='absolute text-white rounded-full h-4 w-4 -top-3 -right-2 text-xs' style={{backgroundColor:`${cartItems.length === 0 ? 'white' : 'red'}`}}>{cartItems.length}</small>
                </button>
                </Link>
            </div>
            <div className='w-9 h-9 '>
                <img src={avatar} alt="" className='rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Nav