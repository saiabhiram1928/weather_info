import React,{useContext} from 'react'
import {weather_context} from '../context/Context'
import * as weather_icon from "react-icons/wi";
const Card = () => {
    const {weather} = useContext(weather_context)
 
    const {current,location} = weather
    const {weather_descriptions}=current
  
  return (
    <div class="bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 w-full h-screen flex items-center justify-center">
    <div class="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md h-3/5 w-3/5 justify-center">
      <div className='grid md:grid-cols-1  gap-8 ml-10'>
        {
    weather_descriptions.map((weather_description,index)=>{
return <div>

 <img className="h-32 w-32 bg-white" src={current.weather_icons[index]} alt="" />
 <p class="text-center text-gray-500 mt-2 text-sm">{weather_description}</p> 
 
</div>
    })
        }
                
       
        
        </div>
      <div>
        <p class="text-7xl font-bold text-right border-2 boder-red text-gray-900">{current.temperature}°</p>
        <p class="text-gray-500 text-sm">{location.name}, {location.country}</p>
      </div>
    </div>
  
   
  </div>
  )
}

export default Card