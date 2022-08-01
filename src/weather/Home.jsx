import React,{useContext} from 'react'
import {weather_context} from '../context/Context'
import Card from './Card'
const Home = () => {
    const {loading,component} = useContext(weather_context)
    console.log(loading,component);
  if(!loading && !component){
    return (
 <Card/>

      )
  }
else if(loading && !component){
  return <h1 className="text-xl text-black">loading....</h1>
}else{
  return  <h1 className="text-xl text-black">Not found</h1>
}
  
}

export default Home