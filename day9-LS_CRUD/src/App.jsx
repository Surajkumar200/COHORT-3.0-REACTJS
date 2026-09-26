import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import UserCard from "./componets/UserCard";
import Form from "./componets/Form";

const App = () => {
  // let obj = {
  //   name:"suraj",
  //   age:25
  // }

  // localStorage.setItem("user",JSON.stringify(obj))

  // let lsd = localStorage.getItem("user")
  // let res = JSON.parse(lsd);
  // console.log(res)

  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updateUser, setUpdateUser] = useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((val) => {
      return val.id !== id;
    });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="flex flex-col gap-10">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                setToggle={setToggle}
                deleteUser={deleteUser}
                setUpdateUser={setUpdateUser}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center">
          <Form
            updateUser={updateUser}
            setUpdateUser={setUpdateUser}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
