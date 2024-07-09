import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-8 px-4 lg:px-32 lg:text-[12px] text-[14px] md:py-12 mx-auto max-w-[1440px] text-[#190028] bg-[#FAFAFB] md:bg-white'>
        <div className='lg:flex hidden justify-center lg:order-none order-2 items-center gap-14 '>
            <div className='lg:w-[221px]'>
                <p className='font-bold text-[22px]'>Fear of Missing Out?</p>
                <p className=''>Get the latest deals, updates and more</p>
            </div>
            <div className='flex items-center gap-2'>
                <input type="text" className='p-3 rounded w-full' placeholder='Your Email Address' style={{border:'1px solid #C6BFC9'}}/>
                <button style={{backgroundColor:'#9C0001'}} className='text-[#FFE8F1] rounded p-3 w-52'><Link to='/products/8'>Subscribe Now</Link></button>
            </div>
        </div>
        <div className='border-1 border-[#C6BFC9] my-8 mx-auto w-[90%] hidden md:block'></div>

        <footer className='flex flex-col gap-10'>
            <div className='flex lg:flex-row flex-col justify-between lg:items-start items-center'>
                <div className='lg:order-none order-2 my-4 lg:my-0'>
                    <p className='font-bold block md:hidden text-center'>Get to us</p>
                    <p className='w-[280px] text-center lg:text-left'>Visit us at Shop F19/23, Road 3, Ikota Shopping Complex, VGC, Lekki-Epe Expressway, Lagos, Nigeria +234 (0) 9064945445</p>
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-14 gap-4'>
                    <div className='md:self-start text-center lg:text-left'>
                        <ul>
                            <li className='font-bold'>Shop</li>
                            <li>Real Estate</li>
                            <li>Furniture</li>
                            <li>Decor</li>
                            <li>Bedding</li>
                            <li>Outdoor</li>
                        </ul>
                    </div>

                    <div className='md:self-start text-center lg:text-left'>
                        <ul>
                            <li className='font-bold'>Popular Brands</li>
                            <li>Ikea</li>
                            <li>Ashley Furniture</li>
                            <li>Crate & Bard</li>
                            <li>Pottery Barn</li>
                            <li>Havens</li>
                            <li>Basset Furniture</li>
                        </ul>
                    </div>

                    <div className='md:self-start text-center lg:text-left'>
                        <ul>
                            <li className='font-bold'>Company</li>
                            <li>About</li>
                            <li>Our Community</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className='md:self-start text-center lg:text-left'>
                        <ul>
                            <li className='font-bold'>Social</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                   
                </div>
                <div className='text-center lg:hidden order-3 flex flex-col gap-2'>
                        <p className='font-bold'>Connect With us</p>
                        <p>Fear of Missing Out? Get the latest deals, updates and more</p>
                        <div className='relative'>
                            <input type="text" placeholder='Enter email address' className='w-full rounded py-2 px-3 bg-[#EDEBEE]' style={{border:'1px solid #E1DEE3'}}/>
                            <button className='absolute py-2 px-4 w-[26.08px] flex flex-col justify-center rounded items-center right-0 text-[#EDEBEE] top-1/2 -translate-y-1/2  mr-[10px]' style={{backgroundColor:"#9C0001"}}><MdOutlineArrowRightAlt/></button>
                        </div>
                </div>
            </div>

            <div className='lg:flex hidden justify-between items-center'>
                <div className='flex gap-14'>
                    <p>Lagos, Nigeria</p>
                    <p>Local Time - 07:00 AM</p>
                </div>
                <div className='flex gap-14'>
                    <p>Terms & Services</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='flex gap-14'>
                    <p>2024</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer