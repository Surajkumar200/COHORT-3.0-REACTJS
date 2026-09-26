import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className="w-full bg-blue-600 flex justify-between items-center p-2">
      <div>
        <img
          className="w-12 p-1 rounded-4xl "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewNsPxU-MptI2bcMFPaOUuDJOKxq70q9C2qFCvTk-mw&s=10"
          alt=""
        />
      </div>
      <div className="flex gap-10">
        <h2>Home</h2>
        <h2>ABOUT</h2>
      </div>
      <div>
        <button
          onClick={() => setToggle(prev => !prev)}
          className="bg-green-500 font-semibold py-3 px-5 rounded-2xl text-white"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Navbar