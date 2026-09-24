import { useState } from "react";
import Register from "./componets/Register"
import UserCard from "./componets/UserCard";

const App = () => {

  const [users, setUsers] = useState([]);
  return (
    <div className="bg-gray-300 h-screen p-2 flex flex-col gap-4">
      <div className="bg-white w-60  rounded">
        <Register setUsers={ setUsers} />
      </div>
      <div className="w-60 flex flex-wrap gap-4 ">
        {
          users.map((elem) => {
            return <UserCard user={elem} />
          })
} 
      </div>

    </div>
  )
}

export default App