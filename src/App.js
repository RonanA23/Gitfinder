import {useState} from 'react'
import './App.css';
import Header from './Header';

import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
import User from './User';

function App() {
  const[newname,setNewname]=useState('brad')
  const[search,setSearch]=useState('')
  const[data,setData]=useState([])

  

  const addHandler=(name)=>{
    setNewname(name)
    SearchUsers(newname)

  }

  const SearchUsers=async(newname)=>{
    const response = await fetch (`https://api.github.com/search/users?q=${newname}`)
    const {items}= await response.json()
    console.log('items are',items)
    setData(items)
    setNewname('')
    
  }
/*
  useEffect(()=>{
   SearchUsers()
  },[])
  */

  const fetchUsers=async()=>{
    const response= await fetch('https://api.github.com/users')
    const data=await response.json()
    console.log('data is',data)
    setData(data)
  }

  const clearUsers=()=>{
    setData([])
  }

  //const response=await fetch('https://api.github.com/search/users?q=brad')


  return (
         <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home data={data} addHandler={addHandler} clearUsers={clearUsers}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Notfound/>}/>
        <Route path='/:login' element={<User/>}/>
      </Routes>  
    </div>
  );
}

export default App;
