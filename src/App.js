import React from 'react'
import Header from './navi/Header'
import Context from './context/Context';
import Home from './weather/Home'


const App = () => {
  return (<>
   
    <Context>
    <Header/>
    <Home/>
   </Context>
   </>
  )
}

export default App  