import React, { useContext, useState } from 'react'
import { BiCreditCard } from 'react-icons/bi'
import { stateContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const navigate = useNavigate()
    const {handleOverlayClick,setCartItems} = useContext(stateContext)

    const [formValues, setFormValues] = useState({
        field1: '',
        field2: '',
        field3: ''
      });
    
      const [errors, setErrors] = useState({
        field1: '',
        field2: '',
        field3: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value
        });
        setErrors({
          ...errors,
          [name]: ''
        });
      };
    
      const validate = () => {
        const newErrors = {};
        let isValid = true;
        
        for (const key in formValues) {
          if (!formValues[key]) {
            newErrors[key] = 'Must not be empty';
            isValid = false;
          }
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          navigate('/success-page');
          alert('Order completed successfully!');
          handleOverlayClick()
        }
      };
    

  return (
    <div className=''>
        <div onClick={handleOverlayClick} className='fixed max-w-[1440px] md:mx-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-2xl text-[#190028] py-4 px-8 flex md:py-[48px] md:px-[64px] flex-col md-gap-9 gap-2  w-4/5 md:w-[604px] mx-6 my-0'>
                <h2 className='font-normal lg:font-bold text-2xl border-b-none lg:border-b-1 border-[#ACACAC] pb-2'>Payment</h2>
                <div className='flex items-center lg:hidden gap-2 bg-[#EDEBEE] py-2 px-3'>
                    <p className='text-[14px]'>Payment options</p>
                    <BiCreditCard />
                </div>
                <div className='md:gap-2 lg:flex flex-col hidden'>
                    <p className='text-[20px] font-normal'>Pay With:</p>
                    <form className='flex gap-4'>
                        <div className='flex gap-2'>
                            <input type="radio" name='radio' />
                            <p>Card</p>
                        </div>
                        <div className='flex text-[#83758B] gap-2'>
                            <input type="radio" className='text-[#ACACAC]' name='radio'/>
                            <p>Bank</p>
                        </div>
                        <div className='flex text-[#83758B] gap-2'>
                            <input type="radio" className='text-[#ACACAC]' name='radio'/>
                            <p>Transfer</p>
                        </div>
                    </form>
                </div>

                <form className='flex gap-2 lg:gap-4 flex-col  mt-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col md-gap-4 gap-2 '>
                        <label htmlFor=""  className='lg:text-[20px] text-[14px] font-normal'>Card Number</label>
                        <input type="text" name='field1' value={formValues.field1} onChange={handleChange} placeholder='1234 5678 9101 1121'style={{border:"1px solid #ACACAC"}} className='rounded py-3 w-full pl-4 text-[12px]'/>
                        {errors.field1 && <p style={{ color: 'red' }} className='text-xs -mt-2'>{errors.field1}</p>}
                    </div>
                    <div className="flex md:gap-4  gap-2">
                        <div className='flex flex-col gap-2 lg:gap-4 w-1/2'>
                            <label htmlFor="" className='lg:text-[20px] text-[14px] font-normal'>Expiration Date</label>
                            <input type="datetime" name='field2' value={formValues.field2} onChange={handleChange} placeholder='MM/YY' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4 text-[12px]'/>
                            {errors.field2 && <p style={{ color: 'red' }} className='text-xs -mt-3' >{errors.field2}</p>}
                        </div>
                        <div className='flex flex-col gap-2 lg:gap-4 w-1/2'>
                            <label htmlFor="" className='lg:text-[20px] text-[14px]  font-normal'>CVV</label>
                            <input type="Number"  name='field3' value={formValues.field3} onChange={handleChange} placeholder='123' style={{border:"1px solid #ACACAC"}} className='rounded py-3 pl-4 text-[12px]'/>
                            {errors.field3 && <p style={{ color: 'red' }} className='text-xs -mt-3'>{errors.field3}</p>}
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <input type="checkbox" name="" id="" className='text-[#ACACAC]'/>
                        <p className='lg:text-[#83758B] text-[12px] text-[#190028]'>Save card details</p>
                    </div>
                    
                    <div className='flex flex-col gap-6'>
                        <button className='p-2 rounded bg-[#9C0001] text-[#FFE8F1]' type='submit'>Continue</button>
                        <p className='text-[12px] text-[#190028] lg-text-[#ACACAC]'>Your personal data will be used to process your order, support your experience throughout 
                            this website, and for other purposes described in our privacy policy.</p>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Payment