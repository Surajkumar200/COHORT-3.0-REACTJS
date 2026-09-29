import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const ProductCard = ({ product }) => {
    const { cardProduct, setAddProduct } = useContext(MyContext);
  const addToCart = () => {
  setAddProduct((pre) => [...pre, { ...product, quantity: 1 }]);
 }
  return (
    <div className='w-60 flex flex-col gap-4 p-2 bg-gray-300 rounded-xl  '>
      <div>
        <img className='bg-white p-2 rounded  '
          src={product.images}
          alt=""
        />
      </div>
          <div className='flex flex-col gap-2'>
              <h1>name</h1>
              <p>descrpition</p>
          </div>
          <div className='flex justify-between '>
              <p>rate</p>
              <p>price</p>
          </div>
      <button
        onClick={addToCart}
        className='bg-green-500 font-semibold text-white py-2 px-3 rounded-2xl '>
              Add to Cart
          </button>
    </div>
  );
}

export default ProductCard