import React, { useContext, useState } from 'react'
import { BiCreditCard } from 'react-icons/bi'
import { stateContext } from '../App'

const Payment = () => {
    const {handleOverlayClick} = useContext(stateContext)
    

  return (
    <div className=''>
        
        <div onClick={handleOverlayClick} className='fixed max-w-[1440px] md:mx-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white text-[#190028] py-4 px-8 flex md:py-[48px] md:px-[64px] flex-col md-gap-9 gap-2  w-4/5 md:w-[604px] mx-6 my-0'>
                <h2 className='font-normal lg:font-bold text-2xl border-b-none lg:border-b-1 border-[#ACACAC] pb-2'>Payment</h2>
                <div className='flex items-center lg:hidden gap-2 bg-[#EDEBEE] py-2 px-3'>
                    <p className='text-[14px]'>Payment options</p>
                    <BiCreditCard />
                </div>
                <div className='md:gap-2 lg:flex flex-col hidden'>
                    <p className='text-[20px] font-normal'>Pay With:</p>
                    <form className='flex gap-4'>
                        <div className='flex'>
                            <input type="radio" name='radio' />
                            <p>Card</p>
                        </div>
                        <div className='flex text-[#83758B]'>
                            <input type="radio" className='text-[#ACACAC]' name='radio'/>
                            <p>Bank</p>
                        </div>
                        <div className='flex text-[#83758B]'>
                            <input type="radio" className='text-[#ACACAC]' name='radio'/>
                            <p>Transfer</p>
                        </div>
                    </form>
                </div>

                <form className='flex gap-2 lg:gap-4 flex-col mt-4'>
                    <div className='flex flex-col md-gap-4 gap-2 '>
                        <label htmlFor="" className='lg:text-[20px] text-[14px] font-normal'>Card Number</label>
                        <input type="text" placeholder='1234 5678 9101 1121'style={{border:"1px solid #ACACAC"}} className='rounded py-3 w-full pl-4 text-[12px]'/>
                    </div>
                    <div className="flex md:gap-4 md:flex-row flex-col gap-2">
                        <div className='flex flex-col gap-4 md:w-1/2'>
                            <label htmlFor="" className='lg:text-[20px] text-[14px] font-normal'>Expiration Date</label>
                            <input type="datetime" placeholder='MM/YY' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4 text-[12px]'/>
                        </div>
                        <div className='flex flex-col gap-4 md:w-1/2'>
                            <label htmlFor="" className='lg:text-[20px] text-[14px]  font-normal'>CVV</label>
                            <input type="Number" id="" placeholder='123' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4 text-[12px]'/>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <input type="checkbox" name="" id="" className='text-[#ACACAC]'/>
                        <p className='lg:text-[#83758B] text-[12px] text-[#190028]'>Save card details</p>
                    </div>
                </form>
                <div className='flex flex-col gap-6'>
                    <button className='p-2 bg-[#9C0001] text-[#FFE8F1]'>Continue</button>
                    <p className='text-[12px] text-[#190028] lg-text-[#ACACAC]'>Your personal data will be used to process your order, support your experience throughout 
                        this website, and for other purposes described in our privacy policy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment