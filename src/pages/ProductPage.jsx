import React, { useContext } from 'react'
import hero2 from '../assets/hero2.svg';
import hero3 from '../assets/hero3.svg';
import avatar from '../assets/avatar.svg';
import hero4 from '../assets/hero4.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { BiCommentDots } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { HiOutlineFlag } from 'react-icons/hi2';
import Recommendations from '../components/Recommendations';
import { useParams } from 'react-router-dom';
import { stateContext } from '../App';



const ProductPage = () => {
  const {products} = useContext(stateContext)
  const {productID} = useParams()
  console.log(productID)
  return (
    <div className='lg:px-28 lg:py-8 px-6 py-0 box-border max-w-[1440px] md:mx-auto'>
        <div className="flex lg:flex-nowrap flex-wrap lg:gap-2 lg:h-[372px] w-full">
            <img src={products[productID].image} alt="" className='w-[90%] h-[327px] lg:h-full object-top object-cover'/>
            <img src={products[productID].image} alt="" className='w-[166px] lg:h-full object-fill h-[200px]' />
            <img src={products[productID].image} alt="" className='lg:w-[166px] lg:h-full   object-fill h-[200px]' />
        </div>

        <div className='my-6 flex flex-col gap-[28px] lg:flex-row text-[#190028]'>
            <div className='flex flex-col gap-2 lg:w-1/2 w-full'>
                <h1 className='lg:text-4xl lg:w-400 w-[208px]  text-[18px] font-normal lg:font-semibold ' style={{color:'#9C0001'}}>{products[productID].title}</h1>
                <div className='lg:flex items-center hidden gap-2 w-400'>
                    <img src={avatar} alt="" className='rounded-full w-9 h-9'/>
                    <div className="flex flex-col">
                        <p className='font-bold'>raphogah</p>
                        <p style={{color:'#83758B'}}>Updated 13 minutes ago</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Sizes</p>
                    <div className='flex items-center gap-2'>
                        <div className='bg-gray-100 py-1 px-2'>XS</div>
                        <div className='bg-gray-100 py-1 px-2'>S</div>
                        <div className='bg-gray-100 py-1 px-2'>M</div>
                        <div className='bg-gray-100 py-1 px-2'>L</div>
                        <div className='bg-gray-100 py-1 px-2'>XL</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Find Similar Listings</p>
                    <div className='flex items-center gap-2'>
                        <div className='bg-gray-100 p-1'>By Size</div>
                        <div className='bg-gray-100 p-1'>By Color</div>
                        <div className='bg-gray-100 p-1'>By Now with Tags</div>
                    </div>
                </div>
                <hr className='my-6' style={{border:'1px solid #C6BFC9'}}/>
                <div className="flex gap-2 mb-6">
                        <p className='font-bold'>N{products[productID].price}</p>
                        <p style={{color:'#83758B'}}>N30,000</p>
                        <p>15%</p>
                </div>
                <button style={{backgroundColor:'#9C0001'}} className='py-2 px-3 mb-6 w-full lg:w-96 text-[#FFE8F1]'>Buy Now</button>
                <div className='flex items-center gap-3' style={{color:'#83758B'}}>
                    <div className='flex items-center'>
                        <span><CiHeart className='text-red-600'/></span>
                        <span>Like and save for later</span>
                    </div>
                    <div className='flex items-center' >
                        <span><AiOutlineShoppingCart/></span>
                        <span>Add to Cart</span>
                    </div>
                </div>

                
            </div>



            <div className='flex flex-col gap-6 lg:w-1/2 w-full mt-7'>
                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-semibold' style={{color:'#9C0001'}}>Sure Fit</p>
                    <div className='flex justify-between items-center'> 
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-2 py-1 px-2 border'>
                                <span><CiHeart className='text-red-600'/></span>
                                <span>Like</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                                <span><BiCommentDots/></span>
                                <span>Comment</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                                <span><IoShareSocialOutline/></span>
                                <span>Share</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                            <span><HiOutlineFlag/></span>
                            <span>Report</span>
                        </div>
                        
                    </div>
                </div>
                <p className='text-[#190028]'>Transform your look with our bold red jacket, designed to capture attention and exude confidence. 
                    This chic and versatile piece combines modern elegance with unmatched comfort, 
                    making it the perfect addition to any wardrobe. Whether you're dressing up for 
                    a night out or adding a pop of color to your everyday style, our red jacket ensures you stand out with 
                    sophistication and ease. Don't miss out on this must-have fashion statement.</p>
                <hr className='' style={{border:'1px solid #C6BFC9'}}/>

                <div className='text-[#190028]'>
                    <p>Transform your look with our bold red jacket, designed to capture attention and exude 
                        confidence. This chic and versatile piece combines modern elegance with unmatched 
                        comfort, making it the perfect addition to any wardrobe. Whether you're dressing up 
                        for a night out or adding a pop of color to your everyday style, our red jacket ensures
                         you stand out with sophistication and ease.</p>

                    <p className='font-bold mt-4'>Why You Should Buy:</p>
                    <ul style={{listStyleType:'circle'}}>
                        <li>Eye-Catching Design: The vibrant red hue is perfect for making a bold fashion statement</li>
                        <li>Versatile Style: Dress it up or down for any occasion, from casual outings to formal events.</li>
                        <li>Unmatched Comfort: Crafted from premium materials, ensuring you stay comfortable all day</li>
                        <li>Timeless Elegance: A classic design that remains stylish season after season.</li>
                        <li>Impeccable Fit: Tailored to provide a flattering silhouette for all body types.</li>
                        <li>Durable Quality: High-quality construction guarantees long-lasting wear.</li>
                    </ul>
                    <p className='mt-4'>Don't miss out on this must-have fashion statement. Shop Now and Transform Your Wardrobe!</p>
                </div>
            </div>
        </div>
        
        <Recommendations/>
    </div>
  )
}

export default ProductPage