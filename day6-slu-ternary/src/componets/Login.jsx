import React from "react";

const Login = ({ setToggele }) => {
 
  return (
    <div className=" bg-white w-90 flex flex-col  rounded-xl gap-4 p-4 ">
      <h1 className="font-semibold">Login</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border rounded-xl p-2"
          type="text"
          placeholder="email"
        />
        <input
          className="border rounded-xl p-2"
          type="text"
          placeholder="passwor"
        />
        <button className="bg-blue-500 rounded-xl border p-2 cursor-pointer ">
          Login
        </button>
      </form>
      <p>
        Didn't have an Account?{" "}
        <span
          className="text-blue-600 font-bold cursor-pointer "
          onClick={() => setToggele((pre) => !pre)}
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
