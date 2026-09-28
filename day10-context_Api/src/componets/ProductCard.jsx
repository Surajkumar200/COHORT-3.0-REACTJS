import React, { useContext } from 'react'
import { MyStores } from '../context/MyStore';

const ProductCard = () => {
  
  const { product, setCartItems }= useContext(MyStores)
  return (
    <div className="w-60 bg-gray-300 flex flex-col p-2 rounded-xl gap-4">
      <div className=" h-[60%]  bg-white p-4 rounded-2xl">
        <img className="h-[90%]" src={product.image} alt="" />
      </div>
      <div>
        <span className="bg-green-400  p-2 rounded-2xl ">
          {product.category}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h1>{product.title.substring(0, 20)}</h1>
        <p>{product.description.substring(0, 50)}</p>
      </div>
      <div className="flex  justify-between gap-2">
        <p>
          {product.rating.rate}
          <span>`${product.rating.count} (Reviews)`</span>
        </p>
        <p>{product.price}</p>
      </div><button onClick={() => setCartItems((prev) =>[ ...prev,product])} className="bg-blue-500 p-2 rounded-xl">Add to Cart</button>
      
    </div>
  );
};

export default ProductCard