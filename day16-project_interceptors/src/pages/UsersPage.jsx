import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from '../componets/User';

const UsersPage = () => {
  const [usersData, setUsersData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  const getUsersData = async() => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      setUsersData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsersData()
  }, [])
  if(isLoading) return "Loading Page"
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        usersData.map((elem) => {
          return <User key={elem.id} user={elem} />;
        })
      }
    </div>
  )
}

export default UsersPage