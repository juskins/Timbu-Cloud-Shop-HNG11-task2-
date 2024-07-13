

import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { stateContext } from '../App';


// APP_ID Appid
// API_KEY Apikey
const CustomFetch = (count) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const {products,page,setProducts} = useContext(stateContext)

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiId = import.meta.env.VITE_API_ID;
    
    const base_Url = `/api/products?organization_id=5218a98727a849f28eed4ad0a3d7882f&reverse_sort=false&page=${count}&size=12&Appid=${apiId}&Apikey=${apiKey}`

    useEffect(()=>{
        const controller = new AbortController()
        const fetchProducts = async()=>{
            try{
                const response = await fetch(base_Url);
                if(!response.ok){
                    // ?limit=4
                    throw new Error('server error')
                }
                const data = await response.json();
                setProducts(data.items)
                console.log(data.items)
                
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
    },[page])
    
    
    

    return{ products, loading, error}

}

export default CustomFetch