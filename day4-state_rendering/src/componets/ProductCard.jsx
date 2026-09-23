import React from 'react'


const ProductCard = ({product,del}) => {
  return (
    <div className=" w-40 border rounded-xl justify-between  p-2 flex flex-col gap-4">
      <div>
        <img className="w-40 " src={product.image} alt="" />
      </div>
      <div >
        <h2 className="text-2xl">{product.title.substring(0, 20)}</h2>
        <p className="text-lg">{product.category}</p>
        <p className="text-green-700 font-bold ">{product.price}</p>
      </div>
      <button onClick={() => {del(product.id)}} className="bg-red-600 text-black">
        Delete
      </button>
    </div>
  );
}

export default ProductCard 