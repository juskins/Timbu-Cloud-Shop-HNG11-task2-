import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='max-w-[1440px] md:mx-auto bg-[#9C0001] font-bold text-white flex flex-col gap-6 justify-center items-center h-screen'>
      <h1 className='text-[200px] font-extrabold drop-shadow-2xl'>404</h1>
      <p>WE ARE SORRY BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      <button className='rounded-full bg-white text-[#9C0001] py-2 px-4'><Link to='/'>Back Home</Link></button>
    </div>
  )
}

export default ErrorPage