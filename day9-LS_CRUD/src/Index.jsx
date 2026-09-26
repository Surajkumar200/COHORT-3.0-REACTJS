import  { useState } from 'react'
import Navbar from './newComponets/Navbar'
import UserCard from './newComponets/UserCard'
import Form from './newComponets/Form';

const index = () => {
    const [toggle, setToggle] = useState(true);
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem("users")) || [];
    })
    const [updateUser, setUpdateUser] = useState(null);
    
    const deleteUser = (id) => {
        let filterUser = users.filter((val) => {
            return val.id !== id
        })
        setUsers(filterUser);
        localStorage.setItem(("users", JSON.stringify(filterUser)));
    }

  return (
    <div className="flex flex-col gap-6">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex flex-wrap gap-4 '>
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                setUpdateUser={setUpdateUser}
                setToggle={setToggle}
                deleteUser={deleteUser}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center ">
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            updateUser={updateUser}
            setUpdateUser={setUpdateUser}
          />
        </div>
      )}
    </div>
  );
}

export default index