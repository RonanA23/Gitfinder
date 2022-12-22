import React from 'react'
import{FaGithub} from 'react-icons/fa'

function Header() {
  return (
    
    <div className='bg-black py-4 text-2xl text-white font-bold flex items-center justify-between'>
      <div className='flex justify-between w-[1200px] items-center'>
      <FaGithub size={30} className='ml-12'/>
      <p className='ml-16'>GitHub Finder</p> 
      <div className='flex justify-between w-[150px] mr-12 '>
        <a href='/' className='text-sm hover:text-gray-300 cursor-pointer'>Home</a>
        <a href='/about' className='text-sm hover:text-gray-300 cursor-pointer'>About</a>
      </div>

      </div>
    
      </div>
  )
}

export default Header