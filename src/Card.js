import React from 'react'
import { Link } from 'react-router-dom'

function Card({item,repos}) {
  return (
    <Link to={`/${item.login}`}>
     <div className='bg-gray-500 rounded-lg w-[150px] mt-4 mx-auto'>
        <p>{item.login}</p>
        <img src={item.avatar_url} alt='image'/>
        <a className='text-blue-800 cursor-pointer font-bold' href={repos}>Repos</a>
    </div></Link>
   
  )
}

export default Card