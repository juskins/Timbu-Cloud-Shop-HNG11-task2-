import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { createContext, useState } from 'react';

export const stateContext = createContext({
  cartItems:[]
});

function App() {
  const [cartItems, setCartItems] = useState([])
  const [message, setMessage] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const addToCart = ()=>{
    setCartCount(cartCount=>cartCount+1);
  }

  return (
    <stateContext.Provider value={{
      addToCart,
      cartItems,setCartItems,
      message,setMessage,
      cartCount,setCartCount
    }}>
      <Nav />
      <Outlet />
      <Footer/>
    </stateContext.Provider>
  )
}

export default App




