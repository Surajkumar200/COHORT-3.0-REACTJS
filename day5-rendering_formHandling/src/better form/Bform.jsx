import React, { useState } from 'react'

const Bform = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });

    console.log(formData)

  return (
    <div>
      <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="name"
        type="text"
      />
      <input
        onChange={(e) => setFormData({...formData,email:e.target.value})}
        placeholder="email"
        type="text"
      />
      <input
        onChange={(e) => {
          setFormData({...formData,password: e.target.value});
        }}
        placeholder="password"
        type="text"
      />
    </div>
  );
}

export default Bform