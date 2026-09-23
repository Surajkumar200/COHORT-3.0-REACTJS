import React, { useState } from "react";

const App = () => { 
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        mail:""
    });
  const [user, setUser] = useState([]);


  const handleForm = (e) => {
     let  {name,value} = e.target
      setFormData{...formData,[name]:value}
    }

  return (
    <form action="">
      <input
        name={formData.name}
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={() => {
          handleForm;
        }}
      />
      <input
        name={formData.password}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={() => {
          handleForm;
        }}
      />
      <input
        name={formData.email}
        type="email"
        placeholder="enter your email"
        value={mail}
              onChange={() => { handleForm }}
          />
      <button type="submit">submit</button>
    </form>
  );
};

export default App;
