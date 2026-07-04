
const Card = ({ product, deletData, countdata }) => {
  return (
    <div className="p-10 w-48 bg-gray-400 rounded-2 flex flex-wrap gap-1">
      <div className="bg-gray-300 rounded-2  ">
        <img src={product.image} alt="" />
      </div>
      <h1>{product.title}</h1>
      <p>$ {product.price}</p>
      <button
        onClick={() => deletData(product.id)}
        className="p-2  bg-red-500 rounded-2"
      >
        delete
      </button>
      <button className="p-2  bg-red-500 rounded-2" onCanPlay={() => countdata(product.id)}>
        ratings - {product.rating.rate}
      </button>
    </div>
  );
};

export default Card