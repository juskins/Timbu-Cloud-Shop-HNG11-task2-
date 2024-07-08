import React, { useContext } from 'react'
import { stateContext } from '../App'
import { Link, useNavigate, useParams } from 'react-router-dom'
import stars from '../assets/stars.svg';


const ProductItem = ({product}) => {
  const {cartItems, setCartItems,addToCart,setMessage} = useContext(stateContext)
  const addProductToCart = ()=>{
    const newProduct = {
      ...product,qty:1
    }
    let exists = cartItems.some(item => item.id === product.id && item.name === product.name);
    if(!exists){
      setCartItems([...cartItems,newProduct]);
      // console.log(cartItems)
      addToCart();
      setMessage('Added to Cart')
      document.querySelector('.message').scrollIntoView();
      setTimeout(() => {
        setMessage('');
        document.querySelector('.productItem').scrollIntoView();
      }, 1000);
    }
    else{
      setMessage('Already Added to Cart');
      document.querySelector('.message').scrollIntoView();
      setTimeout(() => {
          setMessage('');
          document.querySelector('.productItem').scrollIntoView();
      }, 1000);
  }



  }
  return (
    <div className="productItem hover:shadow-shadow p-4 md:gap-2 gap-[2px] flex flex-col justify-center flex-grow box-border overflow-hidden">
        <Link to={`/products/${product.id}`}><img className=' h-[180px] w-[166px] md:h-[270px] md:w-[247px]' src={product.image} alt=""/></Link>
        <div className='flex flex-col gap-2 text-[#190028]'>
          <div className="font-bold text-[14px] w-60 leading-[16.8px] text-[#190028] text-left">{product.title.substring(0, 30)}</div>
          <p className='text-[12px]'>From Lagos</p>
          <div className='flex gap-2 items-center'>
            <img src={stars} alt="" />
            <span className='text-[12px]'>(346)</span>
          </div>
          <div className='flex gap-2 justify-start items-center'>
            <div className="font-semibold text-3 text-[#190028]">N{product.price}</div>
            <span className='text-[#83758B] text-[12px]'>N3000</span>
            <span className='text-[12px]'>15%</span>
          </div>
        </div>
        <button onClick={()=>addProductToCart()} className='w-full rounded text-[#FFE8F1] p-2' style={{backgroundColor:'#9C0001'}}>Add to cart</button>
    </div>
  )
}

export default ProductItem