import { useState } from "react";
import Card from "./Components/Card";
import data from "./data/data";


const App = () => {
  const [productData, setProductData] = useState(data); ;


  const deletData = (id) => {
   let product =  productData.filter((elem) => {
      return id !== elem.id
    })
    setProductData(product);
  }

  const countdata = (id) => {
    let product = productData.filter((elem) => {
     
      return elem.id === id.rating.rate++;
    });
    setProductData(product);
  }


  return (
    <div className="p-10 flex flex-wrap gap-10 ">
      {productData.map((elem) => {
        return (
          <Card product={elem} deletData={deletData} countdata={countdata} />
        );
        // return <h1>{elem.id}</h1>
      })}
    </div>
  );
}

export default App