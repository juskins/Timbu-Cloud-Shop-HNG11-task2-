import React, { useContext } from 'react'
import { BiPhone, BiPrinter } from 'react-icons/bi'
import { GiCheckMark } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import header from '../assets/avatar.svg'
import { stateContext } from '../App'

const SuccessPage = () => {
  const {cartItems,setCartItems,setCartCount} = useContext(stateContext);
  console.log(cartItems)

  return (
    <div className='m-auto w-[80%] py-5'>
      <div className='text-center flex items-center justify-center flex-col gap-4 p-6 bg-[#f4cc82]'>
        <GiCheckMark className='text-[green] font-bold text-5xl text-center'/>
        <h2 className='font-bold text-2xl'>Thank you! Payment Successful</h2>
      </div>

      <div className='p-6'>
        <div className='py-2 border-b'>
          <div className='flex justify-between items-center text-sm'>
            <p>Shri New Homestay, Coorg, Madikeri Road</p>
            <p>Booking ID - <span>1234-5688-91011</span></p>
          </div>
          <div className='flex justify-between items-center text-sm'>
            <p>Karnataka - 571201</p>
            <p className='flex items-center'><BiPrinter/><span className='text-blue-500'>PRINT/DOWNLOAD RECEIPT</span></p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between items-start my-6 gap-20'>
          <div className='flex flex-col gap-2  lg:w-[70%]'>
            <p className='font-semibold text-xl'>Check-in Details</p>
           

            <p className='font-semibold mt-4'>Item ordered</p>
            <div className='flex items-center text-gray-600 font-semibold justify-between'>
              <p>Item Name</p>
              <p>Quantity</p>
              <p>Item Price</p>
            </div>
            {cartItems.map(item=>(
              <div className='flex items-center text-gray-500 justify-between' key={item.id}>
                <p>{item.name}</p>
                <p className=''>{item.qty}</p>
                <p>{item.current_price}</p>
              </div>
            ))}
            

            
          </div>

          <div className=' lg:w-[30%] w-full flex flex-col gap-2'>
            <p className='bg-[#9C0001] p-2 text-white text-center'>STATUS OF BOOKING</p>
            <div className='flex flex-col gap-3'>
              <img src={header} className='w-[100%] h-[200px] object-cover object-right' alt="" />
              <p><span className='text-gray-500'>Owner :</span> <span>Lawrence Mario John</span></p>
              <p className='flex items-center gap-2'><span><BiPhone/></span> <span>091234567</span></p>
              <p className='flex items-center gap-2'><span><MdEmail/></span> <span>omojuwababatunde1@gmail.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage