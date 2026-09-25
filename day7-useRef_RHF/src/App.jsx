import { useState } from "react"
import Rhform from "./Rhform"


const App = () => {
  const [users, setUsers] = useState([])
  console.log(users)
  return (
    <div>
      <Rhform setUsers={setUsers} />
    </div>
  )
}

export default App