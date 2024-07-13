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
import { useNavigate, useParams } from 'react-router-dom';
import { stateContext } from '../App';



const ProductPage = () => {
  const {products,cartItems, setCartItems,addToCart,setMessage} = useContext(stateContext)
  const navigate = useNavigate()
  const {productID} = useParams()
  const product = products?.find(product => product.unique_id === productID);
//   product
//   console.log(products)

  const addProductToCart = ()=>{
    const newProduct = {
      ...product,qty:1
    }
    let exists = cartItems.some(item => item.unique_id === product.unique_id && item.name === product.name);
    if(!exists){

      setCartItems([...cartItems,newProduct]);
    //   console.log(newProduct)
      addToCart();
    //   navigate('/checkout')
    }

  }
//   console.log({productID})
  return (
    <div className='lg:px-28 lg:py-8 px-6 py-0 box-border max-w-[1440px] md:mx-auto'>
        <div className="flex lg:flex-nowrap flex-wrap lg:gap-2 lg:h-[372px] w-full">
            <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt="" className='w-[90%] m-auto h-[327px] lg:h-full object-top object-contain'/>
            <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt="" className='w-[166px] m-auto lg:h-full object-contain h-[200px]' />
            <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt="" className='lg:w-[166px] lg:h-full m-auto object-contain h-[200px]' />
        </div>

        <div className='my-6 flex flex-col gap-[28px] lg:flex-row text-[#190028]'>
            <div className='flex flex-col gap-2 lg:w-1/2 w-full'>
                <h1 className='lg:text-4xl lg:w-400 w-[208px]  text-[18px] font-normal lg:font-semibold ' style={{color:'#9C0001'}}>{product.name}</h1>
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
                        <button className='bg-gray-100 py-1 px-2'>XS</button>
                        <button className='bg-gray-100 py-1 px-2'>S</button>
                        <button className='bg-gray-100 py-1 px-2'>M</button>
                        <button className='bg-gray-100 py-1 px-2'>L</button>
                        <button className='bg-gray-100 py-1 px-2'>XL</button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Find Similar Listings</p>
                    <div className='flex items-center gap-2'>
                        <button className='bg-gray-100 p-2'>By Size</button>
                        <button className='bg-gray-100 p-2'>By Color</button>
                        <button className='bg-gray-100 p-2'>By Now with Tags</button>
                    </div>
                </div>
                <div className="flex gap-2 my-6">
                        <p className='font-bold'>N{product.price}</p>
                        <p style={{color:'#83758B'}}>N30,000</p>
                        <p>15%</p>
                </div>
                <button onClick={addProductToCart} className='py-2 px-3 bg-[#9C0001] mb-6 w-full rounded lg:w-96 text-[#FFE8F1]'>Buy Now</button>
                <div className='flex items-center gap-3' style={{color:'#83758B'}}>
                    <div className='gap-2 items-center hidden lg:flex' >
                        <span><CiHeart className='text-[#F73737]'/></span>
                        <span>Like and save for later</span>
                    </div>
                    <div className='flex gap-2 items-center' >
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
                            <button className='flex items-center gap-2 py-1 px-2 border'>
                                <span><CiHeart className='text-red-600'/></span>
                                <span>Like</span>
                            </button>
                            <button className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                                <span><BiCommentDots/></span>
                                <span>Comment</span>
                            </button>
                            <button className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                                <span><IoShareSocialOutline/></span>
                                <span>Share</span>
                            </button>
                        </div>
                        <button className='flex items-center gap-2 text-gray-400 py-1 px-2 border'>
                            <span><HiOutlineFlag/></span>
                            <span>Report</span>
                        </button>
                        
                    </div>
                </div>
                <p className='text-[#190028]'>{product.description}</p>
                <hr className='' style={{border:'1px solid #C6BFC9'}}/>

                <div className='text-[#190028]'>
                    <p>{product.description}</p>

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