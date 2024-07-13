import React, { useContext, useState } from 'react'
import Recommendations from '../components/Recommendations';
import { stateContext } from '../App';
import Payment from '../components/Payment';
import { PiTrashSimpleLight } from 'react-icons/pi';



const Checkout = () => {
  const {cartItems,setCartItems,setCartCount} = useContext(stateContext);
  const {isOverlayVisible,setOverlayVisible} =useContext(stateContext)
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // console.log(cartItems)

  const balance = cartItems?.reduce((total,item)=>Number(item?.current_price)+ total,0)
  
  const removeFromCart = (id)=>{
    setCartCount(cartCount=>cartCount-1)
    let newCartItems = cartItems.filter(item=>item.id !== id);
    setCartItems(newCartItems);
}

const clearCart = ()=>{
  setCartItems([])
}

const increaseQty = (id) =>{
  cartItems.map(item=>{
      if(item.id === id){
          item.qty+=1;
          item.current_price *= item.qty;
          setCartItems([...cartItems])
          // console.log(cartItems)
      }
  })
}
const decreaseQty = (id) =>{
  cartItems.map(item=>{
      if(item.id === id){
          if(item.qty !=1){
              item.current_price /= item.qty;
              item.qty-=1;
              setCartItems([...cartItems])
          }
          
      }
  })
}




  return (
    <div className='relative max-w-[1440px] md:mx-auto text-[#190028]'>
      <div className='px-6 py-0 lg:px-28 lg:py-8'>
      <div className='flex flex-col gap-6 py-6'>
        <p className='text-2xl font-medium'>Shopping Cart</p>
        <div className = 'flex lg:flex-row gap-12 flex-col'>
          <div className='flex flex-col gap-3  flex-wrap w-full'>
            {cartItems?.map(item=>(
              <div className='flex gap-4 items-center border-b-1 py-3' key={item.unique_id}>
              <img src={`https://api.timbu.cloud/images/${item?.photos[0].url}`} className='h-full w-[100px] lg:w-44 lg:h-52 object-cover object-center' alt="" />
              <div className='flex lg:items-center justify-between flex-col flex-grow md:flex-row gap-4'>
                <div className=''>
                  <p className='font-bold text-sm mb-1'>{item.name}</p>
                  <div>
                    <div className='flex items-center gap-2'>
                          <p className='text-sm'>Sizes</p>
                          <button className='bg-gray-100 focus:bg-blue-500 focus:text-white py-1 px-2'style={{fontSize:'7px'}}>XS</button>
                          <button className='bg-gray-100 focus:bg-blue-500 focus:text-white py-1 px-2'style={{fontSize:'7px'}}>S</button>
                          <button className='bg-gray-100 focus:bg-blue-500 focus:text-white py-1 px-2'style={{fontSize:'7px'}}>M</button>
                          <button className='bg-gray-100 focus:bg-blue-500 focus:text-white py-1 px-2'style={{fontSize:'7px'}}>L</button>
                          <button className='bg-gray-100 focus:bg-blue-500 focus:text-white py-1 px-2'style={{fontSize:'7px'}}>XL</button>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col w-full'>
                  <div className='flex items-center flex-grow justify-between  lg:justify-end  gap-9'>
                    <div className='flex gap-4 items-center'>
                      <button className='py-2 px-3 text-sm' style={{border:'1px solid #C6BFC9'}} onClick={()=>decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button className='py-2 px-3 text-sm' style={{border:'1px solid #C6BFC9'}} onClick={()=>increaseQty(item.id)}>+</button>
                    </div>
                    <div>
                      <p className='font-bold '>N{item.current_price}</p>
                      <button className='self-end text-sm cursor-pointer' onClick={()=>removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            ))}

            {cartItems.length > 0 && <button onClick={clearCart} className='self-end text-[#972222] flex items-center gap-1 py-2 px-4 border rounded-lg border-[#972222]'><PiTrashSimpleLight/> <p>Clear Cart</p></button>}
            
          </div>
          

          <div className='p-4 flex flex-col gap-3 h-full' style={{backgroundColor:'#F6F5F6'}}>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Order details</p>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <p>Subtotal ({cartItems.length}) items</p>
                  <p>N{balance.toLocaleString()}</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping and handling fees</p>
                  <p>N33,000</p>
                </div>
              </div>
              <div className='flex items-center border-b-1 pb-4'>
                <input type="text" placeholder='Discount code or gift card' className=' py-2 rounded px-3 mr-3' style={{border:'1px solid #A69F9F'}}/>
                <button style={{backgroundColor:'#9C0001',color:'#FFE8F1'}} className='py-2 rounded px-3'>Apply</button>
              </div>
              <div className='flex justify-between'>
                <p>Grand Total</p>
                <h2 className='font-bold'>N{cartItems.length === 0 ? 0 : (Number(`${balance}`) + 33000).toLocaleString()} </h2>
              </div>
            </div>
            <button style={{backgroundColor:'#9C0001',color:'#FFE8F1'}} className='py-2 rounded px-3 w-full' onClick={()=>setOverlayVisible(true)}>Buy Now</button>
          </div>

        </div>
      </div>
      <Recommendations/>
    </div>
    {isOverlayVisible && <Payment/>}
    </div>
  )
}

export default Checkout