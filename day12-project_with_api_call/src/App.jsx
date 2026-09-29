import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { MyContext } from './context/MyContext';
import CartCard from './components/CartCard';
import axios from 'axios';

const App = () => {
  const { isCardOpen, cardProduct, setCardProduct } = useContext(MyContext);
  
  const getProduct = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    setCardProduct(res.data.products)
  }

  useEffect(() => {
    getProduct()
  },[])

  return (
    <div className="w-full flex flex-col gap-10">
      <Navbar />
      {isCardOpen ? (
        <div className='flex flex-wrap gap-4'>
          {
            cardProduct.map((elem) => {
              return <ProductCard key={elem.id} product={elem} />;
            })
          }
        
        </div>
      ) : (
        <div>
          <CartCard />
        </div>
      )}
    </div>
  );
}

export default App