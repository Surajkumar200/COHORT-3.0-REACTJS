import React, { useState } from 'react'

const Ofrom = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({...formData,[name]:value})
    }
    console.log(formData)

  return (
      <div>
          <input
              onChange={handleChange}
              name='name'
              placeholder='name'
              type="text"
          />
          
          <input
              onChange={handleChange}
              name='email'
              placeholder='email'
              type="text"
          />
          <input
              onChange={handleChange}
              name='password'
              placeholder='password'
              type="text"
          />

    </div>
  )
}

export default Ofrom