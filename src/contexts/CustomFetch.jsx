

import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CustomFetch = (limit) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        const controller = new AbortController()
        const fetchProducts = async()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products${limit}`);
                if(!response.ok){
                    // ?limit=4
                    throw new Error('server error')
                }
                const data = await response.json();
                setProducts(data)
                
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