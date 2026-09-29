import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const Navbar = () => {
      const { setIsCardOpen} = useContext(MyContext);
  return (
    <div className="w-full bg-green-500 flex justify-between items-center p-2 ">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="flex gap-10 ">
        <h1 className="cursor-pointer" onClick={() => setIsCardOpen(true)}>
          Home
        </h1>
        <h1 className="cursor-pointer" onClick={() => setIsCardOpen(false)}>
          Card
        </h1>
      </div>
      <button className="bg-blue-500 py-3 px-5 rounded-xl font-semibold">
        Create
      </button>
    </div>
  );
}

export default Navbar