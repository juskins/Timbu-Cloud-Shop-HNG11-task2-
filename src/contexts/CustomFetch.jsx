

import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { stateContext } from '../App';

const CustomFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const {products,setProducts} = useContext(stateContext)
    useEffect(()=>{
        const controller = new AbortController()
        const fetchProducts = async()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products`);
                if(!response.ok){
                    // ?limit=4
                    throw new Error('server error')
                }
                const data = await response.json();
                setProducts(data)
                // console.log(data)
                
            }
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
            
        }
        fetchProducts()
    
        return ()=>{
            controller.abort()
        }
    },[])
    
    
    

    return{ products, loading, error}

}

export default CustomFetch