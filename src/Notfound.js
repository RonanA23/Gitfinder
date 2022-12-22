import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        <h1 className='text-3xl text-purple-700 font-bold mt-8 mb-8'>Oops!</h1>
        <p className='font-bold mb-4'>Page not Found</p>
        <Link to='/'>
            <p className='bg-red-400 hover:bg-red-500 cursor-pointer w-[200px] mx-auto p-2 font-bold rounded mt-4'>Home</p></Link>
    </div>
  )
}

export default Notfound