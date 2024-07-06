import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-32 py-12'>
        <div className='flex justify-center items-center gap-14 '>
            <div className=''>
                <p className='font-bold text-2xl'>Fear of Missing Out?</p>
                <p>Get the latest deals, updates and more</p>
            </div>
            <div className='flex items-center gap-2 w-2/5'>
                <input type="text" className='p-3 w-full' placeholder='Your Email Address' style={{border:'1px solid #C6BFC9'}}/>
                <button style={{backgroundColor:'#9C0001'}} className='text-white p-3 w-52'><Link to='/products/8'>Subscribe Now</Link></button>
            </div>
        </div>
        <div className='border-1 my-8 w-3/5 text-center mx-auto '></div>

        <footer className='flex flex-col gap-10'>
            <div className='self-end flex flex-col gap-3 w-96'>
                <p className='font-bold'>Sign up for our newsletter</p>
                <p className='border-b-2 pb-3 border-gray-400'>Your email here</p>
            </div>

            <div className='flex justify-between items-center'>
                <p className='w-72 self-start'>Visit us at Shop F19/23, Road 3, Ikota Shopping Complex, VGC, Lekki-Epe Expressway, Lagos, Nigeria +234 (0) 9064945445</p>
                <div className='flex justify-center items-center gap-14'>
                    <div className='self-start'>
                        <ul>
                            <li className='font-semibold'>Shop</li>
                            <li>Real Estate</li>
                            <li>Furniture</li>
                            <li>Deco</li>
                            <li>Bedding</li>
                            <li>Outdoor</li>
                        </ul>
                    </div>

                    <div className='self-start'>
                        <ul>
                            <li className='font-semibold'>Popular Brands</li>
                            <li>Ikea</li>
                            <li>Ashley Furniture</li>
                            <li>Crate & Bard</li>
                            <li>Pottery Barn</li>
                            <li>Havens</li>
                            <li>Basset Furniture</li>
                        </ul>
                    </div>

                    <div className='self-start'>
                        <ul>
                            <li className='font-semibold'>Company</li>
                            <li>About</li>
                            <li>Our Community</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className='self-start'>
                        <ul>
                            <li className='font-semibold'>Social</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center'>
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