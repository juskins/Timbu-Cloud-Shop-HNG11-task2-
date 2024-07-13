import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { createContext, useState } from 'react';

export const stateContext = createContext({
  cartItems:[],
  products:null
});

function App() {
  const [cartItems, setCartItems] = useState([])
  const [message, setMessage] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState(null);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [page, setPage] = useState(1)

  const addToCart = ()=>{
    setCartCount(cartCount=>cartCount+1);
  }


  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };

  return (
    <stateContext.Provider value={{
      addToCart,
      products,setProducts,
      isOverlayVisible,setOverlayVisible,handleOverlayClick,
      cartItems,setCartItems,
      message,setMessage,
      cartCount,setCartCount,
      page, setPage
    }}>
      <Nav />
      <Outlet />
      <Footer/>
    </stateContext.Provider>
  )
}

export default App




