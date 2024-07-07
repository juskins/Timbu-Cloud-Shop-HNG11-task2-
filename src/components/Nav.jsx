import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { TiMessages } from 'react-icons/ti'
import avatar from '../data/avatar.svg';
import logo from '../data/logo.svg';
import { stateContext } from '../App'
import { Link } from 'react-router-dom'

const Nav = () => {
    const {cartItems} = useContext(stateContext)
  return (
    <div className='flex mx-auto max-w-[1440px] px-6 py-0 md:px-32 md:py-6 gap-2 md:gap-24 justify-between items-center flex-wrap md:flex-nowrap'>
        <Link to='/'><img src={logo} alt="" className='w-32 md:w-52'/></Link>
        <input type="search" style={{border:'1px solid #C6BFC9'}} className='w-full rounded px-4 py-2 order-3 md:order-none' placeholder='Search Products'/>
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