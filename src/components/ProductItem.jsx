import React, { useContext } from 'react'
import { stateContext } from '../App'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({product}) => {
  const {cartItems, setCartItems,addToCart,setMessage} = useContext(stateContext)
  const navigate = useNavigate()
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
    <div className="productItem border p-4 flex flex-col justify-center rounded-t-md flex-grow box-border">
        <img className='rounded h-72 min-w-52 ' src={product.image} alt="" />
        <div className="flex-grow font-bold text-3 w-60 leading-8 text-[#190028] text-left">{product.title}</div>
        <div className="flex-grow my-2 text-left text-[#190028]"><b>Reviews:</b> {product.rating.count}</div>
        <div className="flex-grow font-semibold text-3 text-[#190028]">${product.price}</div>
        <button onClick={()=>addProductToCart()} className='w-full text-[#FFE8F1] p-2' style={{backgroundColor:'#9C0001'}}>Add to cart</button>
    </div>
  )
}

export default ProductItem