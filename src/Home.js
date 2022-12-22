import React from 'react'
import Input from './Input'
import Card from './Card'

function Home({data,addHandler,clearUsers}) {
  return (
    <div>
         <Input addHandler={addHandler}/>
      {data.length>0 &&
      <div className='bg-red-500 mt-2 rounded-lg p-2 text-black font-bold cursor-pointer w-[300px] mx-auto hover:bg-red-600
      ' onClick={clearUsers}>Clear</div>
      }
      <div className='grid grid-cols-5'>{data?.map((item)=>(
        <Card item={item} key={item.id}  repos={item.repos_url}/>))}</div>
      
    </div>
  )
}

export default Home