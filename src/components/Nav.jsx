import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { GiLovers } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti'
import avatar from '../data/avatar.svg';
import { stateContext } from '../App'
import { Link } from 'react-router-dom'

const Nav = () => {
    const {cartItems} = useContext(stateContext)
  return (
    <div className='flex px-32 py-6 gap-24 justify-between items-center'>
        <div className='rounded border px-2'><Link to='/'>Logo</Link></div>
        <input type="search" style={{border:'1px solid #C6BFC9'}} className='w-full rounded px-4 py-2' placeholder='Search Products'/>
        <div className='flex items-center gap-3 text-2xl'>
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