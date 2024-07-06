import React from 'react'
import Checkout from '../pages/Checkout'

const Payment = () => {

  return (
    <div className='relative'>
        <div className='bg-gray-200'>
            <Checkout/>
        </div>
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white py-4 px-8 flex flex-col gap-9 w-5/12'>
                <h2 className='font-bold text-2xl '>Payment</h2>
                <div>
                    <p className='text-sm'>Pay With:</p>
                    <div className='flex gap-4'>
                        <div className='flex'>
                            <input type="radio" checked/>
                            <p>Card</p>
                        </div>
                        <div className='flex'>
                            <input type="radio" />
                            <p>Bank</p>
                        </div>
                        <div className='flex'>
                            <input type="radio" />
                            <p>Transfer</p>
                        </div>
                    </div>
                </div>

                <form className='flex gap-4 flex-col'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-sm font-semibold'>Card Number</label>
                        <input type="text" placeholder='1234 5678 9101 1121'style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4'/>
                    </div>
                    <div className="flex gap-4">
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="" className='text-sm font-semibold'>Expiration Date</label>
                            <input type="datetime" placeholder='MM/YY' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="" className='text-sm font-semibold'>CVV</label>
                            <input type="Number" id="" placeholder='123' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4'/>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <input type="checkbox" name="" id="" />
                        <p>Save card details</p>
                    </div>
                </form>
                <div className='flex flex-col gap-6'>
                    <button style={{backgroundColor:'#9C0001', color:'#FFE8F1'}} className='p-2'>Continue</button>
                    <p className='text-sm' style={{color:'#ACACAC'}}>Your personal data will be used to process your order, support your experience throughout 
                        this website, and for other purposes described in our privacy policy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment