import { data } from 'autoprefixer'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaUsers} from 'react-icons/fa'

function User() {
    const [data,setData]=useState([])
    const [repos,setRepos]=useState([])
    const {login}=useParams()

    useEffect(()=>{
        callHandler(login)
        getRepos(login)
    },[login])

    const callHandler=async(login)=>{
        console.log('running callHandler on',login)
        const response = await fetch(`https://api.github.com/users/${login}`)
        const data=await response.json()
        setData(data)
        console.log(data)
    }

    const getRepos=async(login)=>{
        const response = await fetch(`https://api.github.com/users/${login}/repos`)
        const data= await response.json()
        console.log('your repo data is',data)
        setRepos(data)
        console.log('repos!!',repos)
    }

    

    
  return (
    <div className='bg-gray-500 h-screen'>
    <div className=' flex'>
        
        <div className='w-[600px] mx-auto flex mt-[100px]'> 
        <div> 
            <Link className='text-white text-2xl hover:text-gray-200' to='/'>Back to Search</Link>
     <img className='rounded-full w-[200px] mt-4 mb-4 mx-auto' src={data.avatar_url} alt=''/></div>
    <div className='ml-8 w-[400px]'>
        <div className='flex justify-between items-center'>
             <p className='text-2xl font-bold mt-4 mb-2 text-white'>{data.login}</p>
    {data.hireable && 
     <div className='flex justify-between w-[100px] mt-4 mr-8'>
          <p className='text-green-300'>User</p>
        <p className='text-blue-400 font-bold'>Hireable</p>
        </div>
    }

        </div>
  
     <p className='font-bold' >Bio:
        <span className=' mr-2 mb-8'>{ data.bio}</span></p>
        <div className='mt-8'>

        
        <a href={data.html_url} rel='norefferer' className='text-1xl w-[300px] btn font-bold hover:bg-blue-400 p-2 mt-8 text-white border-white border-2'>Visit GitHub Profile</a>
        </div>
        <div className='flex h-4 w-[600px] mb-20 justify-between'>
            {data.location &&
            <div>
                <p className='text-gray-400 font-bold mt-2'>Location</p>
                <p className='text-white font-bold'>{data.location}</p></div>}
                {data.blog &&
            <div>
                <p className='text-gray-400 font-bold mt-2'>Website</p>
                <p className='text-white font-bold'>{data.blog}</p></div>}
                {data.twitter_username &&
            <div>
                <p className='text-gray-400 font-bold mt-2'>Twitter</p>
                <p className='text-white font-bold'>{data.twitter_username}</p></div>}
            
        </div>
    </div>
        </div>
        

        </div>
        <div className='flex h-20 mx-auto w-[800px] justify-between'>
            <div className='flex justify-between w-[200px] m-2'>
                <div>
                    <p className='text-gray-300'>Followers</p>
                    <p className='text-2xl text-white font-bold'>{data.followers}</p>
                </div>
                <div>
                    <FaUsers size={50} className='text-pink-500'/>
                </div>
            </div>
            <div className='flex justify-between w-[200px] m-2'>
                <div>
                    <p className='text-gray-400'>Following</p>
                    <p className='text-2xl text-white font-bold'>{data.following}</p>
                </div>
                <div>
                    <FaUsers size={50} className='text-pink-500'/>
                </div>
            </div>
            <div className='flex justify-between w-[200px] m-2'>
                <div>
                    <p className='text-gray-400'>Public Repos</p>
                    <p className='text-2xl text-white font-bold'>{data.public_repos}</p>
                </div>
                <div>
                    <FaUsers size={50} className='text-pink-500'/>
                </div>
            </div>
            <div className='flex justify-between w-[200px] m-2'>
                <div>
                    <p className='text-gray-400'> Gists</p>
                    <p className='text-2xl text-white font-bold'>{data.public_gists}</p>
                </div>
                <div>
                    <FaUsers size={50} className='text-pink-500'/>
                </div>
            </div>
           
            
        </div>
        <div className='bg-gray-500'>Here Be Repos:
        <div className='flex justify-between mx-11'>{repos?.slice(0,5).map((item)=>(
            <div className='border-2 w-[200px] mt-4 rounded-lg hover:bg-blue-400 p-2 cursor-pointer'>
                <a className='m-4 text-blue-200 font-bold' href={item.html_url}>{item.name}</a>
                </div>
            ))}</div>
        </div>
            
       
     
    </div>
   
  )
}

export default User