import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className="w-full bg-blue-500 flex justify-between items-center p-2">
      <div className="w-15 ">
        <img
          className="rounded-2xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8enxluRpZaixiQ4RYuFwkuPl8C7FiHNqo9Ps8qAHiA&s=10"
          alt=""
        />
      </div>
      <div className="flex gap-4">
        <h2>Home</h2>
        <h2>About</h2>
      </div>
      <div>
        <button onClick={() =>setToggle(pre => !pre)} className="bg-green-500 px-5 py-2 rounded-xl font-semibold">
          create
        </button>
      </div>
    </div>
  );
};

export default Navbar