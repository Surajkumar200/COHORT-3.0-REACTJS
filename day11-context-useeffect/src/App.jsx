import React, { useContext, useEffect, useState } from 'react'
import About from './componets/About'
import Home from './componets/Home'
import { Mystore } from './context/MyContext'
import axios from 'axios'

const App = () => {
  const [apiData, setApiData] = useState(null)
  const { count, setCount } = useContext(Mystore)

  const getData =async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setApiData(res.data)
  }
  
  useEffect(() => {
    getData();
},[])
  
  console.log("app re")
  return (
    <div>
      <h1>
        hello - {count}
      </h1>
      <button onClick={() => setCount(prev => prev+1)}>increment</button>
      <Home/>
      <About/>
    </div>
  )
}

export default App