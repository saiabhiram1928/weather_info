import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const weather_context=createContext()
const Context = ({children}) => {
 const [weather, setWeather] = useState([])
 const [loading, setLoading] = useState(true)
const [component, setComponent] = useState(true)
    useEffect(()=>{
      if(loading==true){
 fetchdata()
      }
        
    },[])
 const fetchdata=async (text)=>{
 
   console.log(`The text is ${text}`)

    const response= await fetch(`http://api.weatherstack.com/current?access_key=c2135e43421bf7bfad596b19692fbea0&query=${text}`)
    const data=await response.json()
    const {current}=data

if(current.weather_descriptions.length>0){
  console.log("Suce3ess")
  setWeather(data);
  console.log(current.weather_descriptions.length)
  setLoading(false)
  setComponent(false)

}
 
    
  
 }
     
  

 
    return <weather_context.Provider value={{weather,loading,fetchdata,component}}>
  {children}
    </weather_context.Provider>;
}

export default Context
export {weather_context} 