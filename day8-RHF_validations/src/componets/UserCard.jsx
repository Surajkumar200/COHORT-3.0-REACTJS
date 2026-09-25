import React from 'react'

const UserCard = ({ user, setToggle }) => {
  return (
    <div className="w-60 p-2 bg-gray-300 flex flex-col gap-4 rounded-xl ">
      <div className="bg-white p-2 rounded-xl h-[70%]">
        <img className="w-60 rounded-xl" src={user.image} alt="" />
      </div>
      <div className="flex flex-col  gap-2 ">
        <h2 className="font-bold ">{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.mobile} </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setToggle(pre=> !pre)}
          className="py-3 px-5 bg-green-500 rounded"
        >
          Update
        </button>
        <button className="py-3 px-5 bg-red-500 rounded">Delete</button>
      </div>
    </div>
  );
};

export default UserCard