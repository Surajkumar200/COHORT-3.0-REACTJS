import React from 'react'

const UserCard = ({ user, deleteUser, setToggle, setUpdateUser }) => {
  return (
    <div className="bg-gray-300 w-60 p-2 rounded-xl flex flex-col gap-4">
      <div className="bg-white p-2 rounded-2xl h-[70%]">
        <img className=" rounded-2xl " src={user.image} alt="" />
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="font-semibold">{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setUpdateUser(user);
            setToggle((prev) => !prev);
          }}
          className="bg-red-500 font-semibold py-3 px-5 rounded-2xl text-white"
        >
          Update
        </button>
        <button
          onClick={() => deleteUser(user.id)}
          className="bg-green-500 font-semibold py-3 px-5 rounded-2xl text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard