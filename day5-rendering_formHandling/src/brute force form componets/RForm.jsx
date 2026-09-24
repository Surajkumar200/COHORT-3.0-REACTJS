import React, { useState } from 'react'

const RForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPasswod]= useState("")

    console.log(name,password,email)

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setPasswod(e.target.value)}
        type="text"
        placeholder="name"
      />

      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
}

export default RForm