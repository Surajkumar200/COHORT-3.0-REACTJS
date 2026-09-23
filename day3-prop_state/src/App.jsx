import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  {console.log(flag)}
  return (
    <div>
    <h1>Count is - {count}</h1>
      <h1>flag - {flag}</h1>
    <button onClick={() =>{setCount((pre) => pre + 1)}}>increments</button>
    <button onClick={() => {setFlag((pre) => !pre)}}>change flag</button>
    </div>
  )
}

export default App