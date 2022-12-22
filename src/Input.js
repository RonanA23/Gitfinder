import React,{useState} from 'react'

function Input({addHandler}) {

    const [name,setName]=useState('bob')

    const submitHandler=(name)=>{
     addHandler(name)
     setName('')
    }

  return (
    <div className='bg-white border rounded-lg  w-[300px] mx-auto mt-8 border'>
        <input className='ml-4' value={name} type='text' placeholder='search here' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>submitHandler(name)} className='bg-green-400 w-[100px] rounded-l-none rounded text-white font-bold p-2 hover:bg-green-600 ml-[1px] '>Search</button>
    </div>
  )
}

export default Input