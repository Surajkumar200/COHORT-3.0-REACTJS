import React, { useState } from 'react'
import Navbar from './componets/Navbar'
import UserCard from './componets/UserCard'
import Form from './componets/Form';

const App = () => {

  const [toggle, setToggle] = useState(false);
  const [users,setUsers] = useState([])
  return (
    <div className="flex flex-col gap-10">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex flex-wrap gap-4'>
          {users.map((elem) => {
            return <UserCard user={elem} setToggle={setToggle} />
          })}
        </div>
      ) : (
          <div className='h-[70%] flex justify-center items-center'>
            <Form setUsers={setUsers} />
        </div>
      )}
    </div>
  );
}

export default App