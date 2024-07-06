import React, { useContext, useState } from 'react'
import Recommendations from '../components/Recommendations';
import { stateContext } from '../App';
import Payment from '../components/Payment';



const Checkout = () => {
  const {cartItems,setCartItems,setCartCount} = useContext(stateContext);
  const [payment, setPayment] = useState(false)

  const balance = cartItems.reduce((total,item)=>Number(item.price)+ total, 0).toFixed(2)

  const removeFromCart = (id)=>{
    setCartCount(cartCount=>cartCount-1)
    let newCartItems = cartItems.filter(item=>item.id !== id);
    setCartItems(newCartItems);
}

const increaseQty = (id) =>{
  cartItems.map(item=>{
      if(item.id === id){
          item.qty+=1;
          item.price = item.price * item.qty;
          setCartItems([...cartItems])
      }
  })
}
const decreaseQty = (id) =>{
  cartItems.map(item=>{
      if(item.id === id){
          if(item.qty !=1){
              item.price = item.price / item.qty;
              item.qty-=1;
              setCartItems([...cartItems])
          }
          
      }
  })
}
  return (
    <div className='relative'>
      <div className='px-6 py-0 lg:px-28 lg:py-8'>
      <div className='flex flex-col gap-6 py-6'>
        <p className='text-2xl font-medium'>Shopping Cart</p>
        <div className = 'flex lg:flex-row gap-12 flex-col'>
          <div className='flex flex-col gap-3 w-5/6 flex-wrap'>
            {cartItems?.map(item=>(
              <div className='flex gap-4 items-center border-b-1 py-3' key={item.id}>
              <img src={item.image} className='w-44 h-52 object-cover object-center' alt="" />
              <div className='flex items-center flex-grow justify-between flex-col  md:flex-row gap-4'>
                <div>
                  <p className='font-bold text-sm mb-1'>{item.title}</p>
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

                <div className='flex flex-col self-start md:self-auto'>
                  <div className='flex gap-9 items-center'>
                    <div className='flex gap-4 items-center'>
                      <button className='py-2 px-3 text-sm' style={{border:'1px solid #C6BFC9'}} onClick={()=>decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button className='py-2 px-3 text-sm' style={{border:'1px solid #C6BFC9'}} onClick={()=>increaseQty(item.id)}>+</button>
                    </div>
                    <p className='font-bold '>N{item.price}</p>
                  </div>
                  <button className='self-end text-sm cursor-pointer' onClick={()=>removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
            ))}

            
          </div>
          

          <div className='p-4 flex flex-col gap-3 h-full' style={{backgroundColor:'#F6F5F6'}}>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Order details</p>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <p>Subtotal ({cartItems.length})</p>
                  <p>{balance}</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping and handling fees</p>
                  <p>N33,000</p>
                </div>
              </div>
              <div className='flex items-center'>
                <input type="text" placeholder='Discount code or gift card' className=' py-2 px-3 mr-3' style={{border:'1px solid #A69F9F'}}/>
                <button style={{backgroundColor:'#9C0001',color:'#FFE8F1'}} className='py-2 px-3'>Apply</button>
              </div>
              <div className='flex justify-between'>
                <p>Grand Total</p>
                <h2 className='font-bold'>${cartItems.length === 0 ? 0 : (Number(`${balance}`) + 33000).toFixed(2)} </h2>
              </div>
            </div>
            <button style={{backgroundColor:'#9C0001',color:'#FFE8F1'}} className='py-2 px-3 w-full' onClick={()=>setPayment(true)}>Buy Now</button>
          </div>

        </div>
      </div>
      <Recommendations/>
    </div>
    {payment && <Payment/>}
    </div>
  )
}

export default Checkout