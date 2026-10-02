import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState(null);


  const getProductData = async() => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data)
  }

  const searchItems = () => {
    console.log("object")
    let res = productData.filter((val) => {
   return val.title.toLowerCase().includes(searchData.toLowerCase());
    })
      setProductData(res);
  }

  useEffect(() => {
    if (!searchData) return;

    let timeOut = setTimeout(() => {
      searchItems();
    }, 700);

    return () => clearTimeout(timeOut);
    
  },[searchData])

  useEffect(() => {
    getProductData()
  }, [])
  

  return (
    <div>
      <h1>Debouncing...</h1>
      <input 
        onChange={(e) => setSearchData(e.target.value)}
        className=' border p-2 '
        type="text"
       placeholder='Search...'
      />
      <div className='mt-10 flex flex-col gap-2 bg-gray-300'>
        {productData.map((val) => {
          return <h1 key={val.id}>{val.title}</h1>;
        })}
      </div>
    </div>
  );
}

export default App