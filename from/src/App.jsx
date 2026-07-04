import React, { useState } from "react";

const App = () => { 
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        mail:""
    });


    const handleForm = (e) => {
      setFormData{...formData,[]}
    }

  return (
    <form action="">
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={() => {
          handleForm;
        }}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={() => {
          handleForm;
        }}
      />
      <input
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
