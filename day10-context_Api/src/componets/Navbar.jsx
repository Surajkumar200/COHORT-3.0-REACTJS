import React, { useContext } from "react";
import { MyStores } from "../context/MyStore";

const Navbar = () => {
  const { setToggle } = useContext(MyStores);
  
  return (
    <div className="w-full p-2  bg-blue-500  flex justify-between items-center ">
      <div className="">
        <img src="" alt="logo" />
      </div>
      <div className="flex gap-10 font-semibold">
        <h2 onClick={() => setToggle(true)}>Home</h2>
        <h2 onClick={() => setToggle(false)}>Card</h2>
      </div>
      <button className="bg-green-500 py-3 px-5 rounded-xl text-white font-semibold{">
        Login
      </button>
    </div>
  );
};

export default Navbar;
