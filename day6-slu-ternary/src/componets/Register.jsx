import React, { useState } from "react";

const Register = ({ setUsers }) => {
  const [formData, setFromData] = useState({
    name: "suraj",
    email: "suraj@gmail.com",
    password: "suraj@12",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((pre) => [...pre, formData]);
    setFromData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="w-60 flex flex-col gap-4 p-4">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={formData.name}
          required
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          value={formData.email}
          required
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          value={formData.password}
          required
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <input
          value={formData.image}
          required
          name="image"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="image"
        />
        <button className="bg-blue-700 p-2 font-semibold rounded-xl ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
