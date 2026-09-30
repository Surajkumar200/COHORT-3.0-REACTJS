import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyContext';
import axios from 'axios';
import ProductCard from '../componets/ProductCard';

const Home = () => {
    const { productData, setProductData } = useContext(MyStore);

    const getProductData = async () => {
        try {
          let res = await axios.get("https://fakestoreapi.com/products");
            setProductData(res.data);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductData()
    },[])
  return (
      <div className='grid grid-cols-4 gap-4'>
          {
              productData.map((elem) => {
                  return <ProductCard key={elem.id} product={elem} />
              })
          }
    </div>
  )
}

export default Home